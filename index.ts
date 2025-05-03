import express from 'express';
import dotenv from 'dotenv';
import swaggerUi from 'swagger-ui-express';
import { swaggerSpec } from './src/docs/swagger';

import EntrevistadorRouter from './src/Entrevistador/infraestructure/routes/entrevistadorRouter';
import DatosLaboralesRouter from './src/DatosLaborales/infraestructure/routes/datosLaboralesRouter';
import CedulaRouter from './src/Cedula/infraestructure/routes/cedulaRouter';
import MiembroFamiliaRouter from './src/MiembroFamilia/infraestructure/routes/miembroFamiliaRouter';
import FamiliaRouter from './src/Familia/infraestructure/routes/familiaRouter';
import ViviendaRouter from './src/Vivienda/infraestructure/routes/viviendaRouter';
import UserRouter from './src/User/infraestructure/routes/userRouter';
import PersonaRouter from './src/Persona/infraestructure/routes/personaRouter';
import EstiloVidaRouter from './src/Estilo_Vida/infraestructure/routes/estiloVidaRouter';
import VacunacionRouter from './src/Vacunacion/infraestructure/routes/VacunacionRouter';
import DireccionRouter from './src/Direccion/infraestructure/routes/direccionRouter';
import UnidadSaludRouter from './src/UnidadSalud/infraestructure/routes/unidadSaludRouter';
import ConvivenciaAnimalesRouter from './src/ConvivenciaAnimales/infraestructure/routes/convivenciaAnimalesRouter';
import EducacionRouter from './src/Educacion/infraestructure/routes/educacionRouter';
import SaludFamiliarRouter from './src/SaludFamiliar/infraestructure/routes/saludFamiliarRouter';
import ServiciosBasicosRouter from './src/ServiciosBasicos/infraestructure/routes/serviciosBasicos_routes';
import MaterialesViviendaRouter from './src/MaterialesVivienda/infraestructure/routes/materialesContruccionRouter';
import ServiciosSaludRouter from './src/ServiciosSalud/infraestructure/routes/serviciosSaludRouter';
import VacunasRouter from './src/Vacunas/infraestructure/routes/vacunasRouter';
import DosisRouter from './src/Dosis/infraestructure/routes/dosisRouter';
dotenv.config();

const app = express();
app.use(express.json());

// Documentación Swagger
app.use('/sums/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));

app.use('/sums',  
    CedulaRouter,
    ConvivenciaAnimalesRouter,
    DatosLaboralesRouter,
    DireccionRouter,
    DosisRouter,
    EducacionRouter,
    EntrevistadorRouter,
    EstiloVidaRouter,
    FamiliaRouter,
    MaterialesViviendaRouter,
    MiembroFamiliaRouter,
    PersonaRouter, 
    SaludFamiliarRouter,
    ServiciosBasicosRouter,
    ServiciosSaludRouter,
    UnidadSaludRouter,
    UserRouter, 
    VacunacionRouter,
    VacunasRouter,
    ViviendaRouter,
);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}/sums`);
});