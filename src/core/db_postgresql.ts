import { Pool, Client } from 'pg';
import dotenv from 'dotenv';

dotenv.config();

interface DBConfig {
  host: string;
  port: number;
  user: string;
  password: string;
  template: string;
  sslmode: string;
}

function loadDBConfig(): DBConfig {
  return {
    host: process.env.DB_HOST || 'localhost',
    port: parseInt(process.env.DB_PORT || '5432', 10),
    user: process.env.DB_USER || '',
    password: process.env.DB_PASS || '',
    template: process.env.DB_TEMPLATE || '',
    sslmode: process.env.DB_SSLMODE || 'disable',
  };
}

// Controla el modo de prueba - cambiar a false en producción,true en pruebas, genera multiples bd
const IS_TEST_MODE = false;

class Conn_PostgreSQL {
  private pool!: Pool; // Usando el operador ! para afirmar que será inicializado
  private config: DBConfig;
  private currentYear: number;
  private initialized: boolean = false;

  constructor() {
    this.config = loadDBConfig();
    this.currentYear = new Date().getFullYear();
    
    // Creamos un pool temporal para tener algo inicializado inmediatamente
    // que será reemplazado por el real después de la verificación de la BD
    this.pool = this.createTempPool();
    
    // Inicia asegurando la base de datos del año actual
    this.ensureDatabaseForCurrentYear()
      .then(() => {
        // Cerramos el pool temporal si existe
        if (this.pool) {
          this.pool.end().catch(err => console.error('Error cerrando pool temporal:', err));
        }
        
        // Creamos el pool real
        this.pool = this.connectToYearDB(this.currentYear);
        this.listenToPool();
        this.initialized = true;
        console.log(`✅ Conexión inicial establecida a centro_medico_${this.currentYear}`);
        
        // Configura intervalo para verificar cambios de año
        const interval = IS_TEST_MODE ? 1 * 60 * 1000 : 60 * 60 * 1000; // 1 min en pruebas, 1 hora en prod
        setInterval(() => this.checkAndUpdateConnection(), interval);
      })
      .catch(err => {
        console.error('❌ Error durante la inicialización:', err);
        process.exit(1);
      });
  }
  
  // Crea un pool temporal para postgres hasta que podamos conectar a la BD del año
  private createTempPool(): Pool {
    return new Pool({
      host: this.config.host,
      port: this.config.port,
      user: this.config.user,
      password: this.config.password,
      database: 'postgres', // Conexión a la BD por defecto
      ssl: this.config.sslmode !== 'disable' ? { rejectUnauthorized: false } : undefined,
      max: 1, // Mínimo de conexiones
      idleTimeoutMillis: 10000,
      connectionTimeoutMillis: 5000,
    });
  }

  private listenToPool() {
    this.pool.on('connect', () => {
      console.log(`✅ Conexión establecida a centro_medico_${this.currentYear}`);
    });

    this.pool.on('error', (err) => {
      console.error('❌ Error en la conexión a la base de datos:', err);
      // Intenta reconectar en caso de error
      setTimeout(() => {
        console.log('🔄 Intentando reconexión...');
        this.pool = this.connectToYearDB(this.currentYear);
        this.listenToPool();
      }, 5000);
    });
  }

  private connectToYearDB(year: number): Pool {
    const dbName = `centro_medico_${year}`;
    return new Pool({
      host: this.config.host,
      port: this.config.port,
      user: this.config.user,
      password: this.config.password,
      database: dbName,
      ssl: this.config.sslmode !== 'disable' ? { rejectUnauthorized: false } : undefined,
      max: 10,
      idleTimeoutMillis: 30000,
      connectionTimeoutMillis: 10000,
    });
  }

  private async checkAndUpdateConnection(): Promise<void> {
    try {
      const now = new Date();
      // En modo prueba, simula cambio de año basado en segundos pares/impares
      // En producción, usa el año actual
      const simulatedYear = IS_TEST_MODE 
        ? this.currentYear + (now.getSeconds() >= 30 ? 1 : 0) 
        : now.getFullYear();

      // Si detectamos cambio de año
      if (simulatedYear !== this.currentYear) {
        console.log(`🔄 Cambio de año detectado: ${this.currentYear} -> ${simulatedYear}`);

        try {
          // Asegura que la BD del nuevo año existe
          await this.ensureYearDatabase(simulatedYear);
          
          // Cierra el pool existente y crea uno nuevo para el año actualizado
          await this.pool.end();
          this.currentYear = simulatedYear;
          this.pool = this.connectToYearDB(simulatedYear);
          this.listenToPool();
          
          console.log(`🔁 Pool de conexiones actualizado para el año ${simulatedYear}`);
          
          // Intenta preparar la BD del siguiente año, pero no bloqueamos el proceso si falla
          try {
            await this.ensureYearDatabase(this.currentYear + 1);
            console.log(`🛠️ Base de datos ${this.currentYear + 1} verificada`);
          } catch (nextYearError) {
            console.warn(`⚠️ No se pudo preparar la base de datos para el año ${this.currentYear + 1}. Se reintentará más tarde.`, nextYearError);
            // Programamos un reintento para más tarde
            setTimeout(() => {
              this.ensureYearDatabase(this.currentYear + 1)
                .then(() => console.log(`🛠️ Base de datos ${this.currentYear + 1} creada en reintento`))
                .catch(err => console.error(`❌ Error en reintento para crear BD ${this.currentYear + 1}:`, err));
            }, 30 * 60 * 1000); // Reintento en 30 minutos
          }
        } catch (yearError) {
          console.error(`❌ Error crítico al cambiar al año ${simulatedYear}:`, yearError);
          console.log(`⚠️ Continuando con la base de datos del año ${this.currentYear}`);
          // No cambiamos el año si hay error, seguimos con el actual
        }
      } else {
        // Si estamos en el último mes del año o en modo prueba, preparamos la BD del siguiente año
        const isLastMonthOfYear = now.getMonth() === 11;
        if (IS_TEST_MODE || isLastMonthOfYear) {
          try {
            await this.ensureYearDatabase(this.currentYear + 1);
            console.log(`🛠️ Base de datos ${this.currentYear + 1} verificada`);
          } catch (error) {
            console.warn(`⚠️ No se pudo verificar la base de datos para el año ${this.currentYear + 1}. Se reintentará más tarde.`);
            // No bloqueamos el proceso principal si falla la verificación
          }
        }
      }
    } catch (error) {
      console.error('❌ Error durante la verificación de conexión:', error);
      // Seguimos con la conexión actual sin interrumpir la aplicación
    }
  }

  async ensureDatabaseForCurrentYear(): Promise<void> {
    const now = new Date();
    const currentYear = now.getFullYear();
    
    // Asegura la BD del año actual
    await this.ensureYearDatabase(currentYear);
    
    // En diciembre o en modo prueba, prepara la BD del próximo año
    const isLastMonthOfYear = now.getMonth() === 11;
    if (IS_TEST_MODE || isLastMonthOfYear) {
      await this.ensureYearDatabase(currentYear + 1);
      console.log(`🛠️ Base de datos del próximo año (${currentYear + 1}) verificada`);
    }
  }

  private async ensureYearDatabase(year: number): Promise<void> {
    const dbName = `centro_medico_${year}`;
    // Quita el sufijo -pooler que podría estar en el host para conexiones directas
    const host = this.config.host.replace('-pooler', '');

    // Conexión a postgres para administrar bases de datos
    const client = new Client({
      host,
      port: this.config.port,
      user: this.config.user,
      password: this.config.password,
      database: 'postgres', // Conexión a la BD por defecto
      ssl: this.config.sslmode !== 'disable' ? { rejectUnauthorized: false } : undefined,
      connectionTimeoutMillis: 10000,
    });

    try {
      await client.connect();

      // Verifica si la BD ya existe
      const result = await client.query(
        'SELECT EXISTS(SELECT 1 FROM pg_database WHERE datname = $1)',
        [dbName]
      );

      if (!result.rows[0].exists) {
        console.log(`⚙️ Creando base de datos: ${dbName} desde plantilla ${this.config.template}`);

        let created = false;
        for (let attempt = 1; attempt <= 3; attempt++) {
          try {
            // Desconecta usuarios de la plantilla
            await this.forceDisconnectTemplate(client, this.config.template);
            
            // Pequeña pausa para asegurar que las conexiones se cierren
            await new Promise(res => setTimeout(res, 1000 * attempt));

            // Permite conexiones a la plantilla y crea la nueva BD
            await client.query(`ALTER DATABASE "${this.config.template}" ALLOW_CONNECTIONS true`);
            await client.query(`CREATE DATABASE "${dbName}" TEMPLATE "${this.config.template}"`);

            console.log(`✅ Base ${dbName} creada exitosamente en intento ${attempt}`);
            created = true;
            break;
          } catch (err: any) {
            // Si la BD ya existe (error 42P04) o hay una restricción de unicidad (23505)
            if (err.code === '42P04' || err.code === '23505') {
              console.log(`ℹ️ La base ${dbName} ya existe (se creó en un intento anterior).`);
              created = true;
              break;
            }
            
            console.error(`❌ Intento ${attempt} fallido:`, err);
            
            // Si hay conexiones activas a la plantilla, espera más tiempo
            if (err.code === '55006') {
              const waitTime = 2000 * attempt; // Incrementa el tiempo de espera
              console.log(`⏳ Esperando ${waitTime/1000} segundos antes del siguiente intento...`);
              await new Promise(res => setTimeout(res, waitTime));
            }
          }
        }

        if (!created) {
          throw new Error(`No se pudo crear la base ${dbName} después de 3 intentos`);
        }
      } else {
        console.log(`ℹ️ La base de datos ${dbName} ya existe`);
      }
    } catch (error) {
      console.error(`❌ Error al verificar/crear la base de datos ${dbName}:`, error);
      throw error;
    } finally {
      // Asegura que el cliente se cierra incluso si hay errores
      try {
        await client.end();
      } catch (e) {
        console.error('Error al cerrar cliente:', e);
      }
    }
  }

  private async forceDisconnectTemplate(client: Client, templateName: string): Promise<void> {
    try {
      console.log(`🔌 Intentando desconectar usuarios de la plantilla ${templateName}...`);
      
      // Verificar si hay conexiones activas
      const activeConnections = await client.query(`
        SELECT count(*) as count
        FROM pg_stat_activity
        WHERE datname = $1 AND pid <> pg_backend_pid()
      `, [templateName]);
      
      const connectionCount = parseInt(activeConnections.rows[0].count, 10);
      if (connectionCount > 0) {
        console.log(`⚠️ Hay ${connectionCount} conexiones activas a la plantilla ${templateName}`);
      }
      
      // Termina todas las conexiones a la plantilla
      await client.query(`
        SELECT pg_terminate_backend(pid)
        FROM pg_stat_activity
        WHERE datname = $1 AND pid <> pg_backend_pid()
      `, [templateName]);

      // Esperar un momento para que las conexiones se cierren completamente
      await new Promise(resolve => setTimeout(resolve, 500));
      
      // Desactiva nuevas conexiones a la plantilla
      try {
        await client.query(`ALTER DATABASE "${templateName}" ALLOW_CONNECTIONS false`);
        console.log(`🔒 Conexiones desactivadas para la plantilla ${templateName}`);
      } catch (alterError: any) {
        console.warn(`⚠️ No se pudo desactivar conexiones a ${templateName}: ${alterError.message}`);
        // No propagamos este error, ya que aún podríamos crear la BD
      }
    } catch (error) {
      console.error(`❌ Error al desconectar usuarios de la plantilla ${templateName}:`, error);
      // No lanzamos el error para permitir que el proceso continúe
    }
  }

  async executePreparedQuery(query: string, values: any[] = []): Promise<any> {
    if (!this.initialized) {
      await this.waitForInitialization();
    }
    
    const client = await this.pool.connect();
    try {
      const result = await client.query(query, values);
      return result;
    } catch (error) {
      console.error('Error ejecutando consulta:', error);
      throw error;
    } finally {
      client.release();
    }
  }

  async fetchRows(query: string, values: any[] = []): Promise<any> {
    if (!this.initialized) {
      await this.waitForInitialization();
    }
    
    const client = await this.pool.connect();
    try {
      const result = await client.query(query, values);
      return result.rows;
    } catch (error) {
      console.error('Error al obtener filas:', error);
      throw error;
    } finally {
      client.release();
    }
  }
  
  // Espera a que la inicialización se complete antes de ejecutar consultas
  private async waitForInitialization(): Promise<void> {
    console.log('⏳ Esperando inicialización de la conexión...');
    return new Promise<void>((resolve) => {
      const checkInitialized = () => {
        if (this.initialized) {
          resolve();
        } else {
          setTimeout(checkInitialized, 100);
        }
      };
      checkInitialized();
    });
  }

  // Método para cerrar el pool cuando la aplicación termina
  async close(): Promise<void> {
    if (this.pool) {
      await this.pool.end();
      console.log('🔒 Conexión a la base de datos cerrada');
    }
  }
}

// Exporta una instancia única de la conexión
export const db = new Conn_PostgreSQL();

// Manejo de cierre adecuado
process.on('SIGINT', async () => {
  console.log('Cerrando aplicación...');
  await db.close();
  process.exit(0);
});

process.on('SIGTERM', async () => {
  console.log('Terminando aplicación...');
  await db.close();
  process.exit(0);
});