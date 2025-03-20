interface Vacunas {
  // Falta Estructura de Base de Datos
}

export class Vacunacion {
  constructor(
    public id: number,
    public persona_id: number,
    public vacunas: Vacunas,
    public dosis: number,
    public fecha_aplicacion: Date
  ) {}
}
/*
  unidad_salud,
entrevistador
datos_Laborales,
familia,
  direccion,
  MaterialConstruccion,
ServiciosBasicos
vivienda
  persona
  educacion
  Vacunacion
  ServiciosSalud
  EstiloVida
  SaludFamiliar
miembroFamilia
  convivencia_animales
cedula
*/