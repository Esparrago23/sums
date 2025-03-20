import express from 'express';
import dotenv from 'dotenv';

import EntrevistadorRouter from './src/Entrevistador/infraestructure/routes/entrevistadorRouter';
import DatosLaboralesRouter from './src/DatosLaborales/infraestructure/routes/datosLaboralesRouter';
import CedulaRouter from './src/Cedula/infraestructure/routes/cedulaRouter';
import MiembroFamiliaRouter from './src/MiembroFamilia/infraestructure/routes/miembroFamiliaRouter';
import FamiliaRouter from './src/Familia/infraestructure/routes/familiaRouter';
import ViviendaRouter from './src/Vivienda/infraestructure/routes/viviendaRouter';
import UserRouter from './src/User/infraestructure/routes/userRouter';
import PersonaRouter from './src/Persona/infraestructure/routes/personaRouter';
import EstiloVidaRouter from './src/Estilo_Vida/infraestructure/routes/estiloVidaRouter';

import Vacunacionrouter from './src/Vacunacion/infraestructure/routes/VacunacionRouter';
import ServicioSaludRouter from './src/ServicioSalud/infraestructure/routes/servicioSaludRouter';
import DireccionRouter from './src/Direccion/infraestructure/routes/direccionRouter';
import MaterialesConstruccionrouter from './src/MaterialesConstruccion/infraestructure/routes/materialesContruccionRouter';
import UnidadSaludRouter from './src/UnidadSalud/infraestructure/routes/unidadSaludRouter';
import ConvivenciaAnimalesRouter from './src/ConvivenciaAnimales/infraestructure/routes/convivenciaAnimalesRouter';
import EducacionRouter from './src/Educacion/infraestructure/routes/educacionRouter';
import SaludFamiliarRouter from './src/SaludFamiliar/infraestructure/routes/saludFamiliarRouter';

dotenv.config();

const app = express();
app.use(express.json());


app.use('/sums',  
        UserRouter, 
        PersonaRouter, 
        EstiloVidaRouter,
        Vacunacionrouter,
        ServicioSaludRouter,
        DireccionRouter,
        MaterialesConstruccionrouter,
        EntrevistadorRouter,
        DatosLaboralesRouter,
        CedulaRouter,
        MiembroFamiliaRouter,
        FamiliaRouter,
        ViviendaRouter,
        UnidadSaludRouter,
        ConvivenciaAnimalesRouter,+
        EducacionRouter,
        SaludFamiliarRouter);


const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});