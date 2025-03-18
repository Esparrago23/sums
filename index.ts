
import express from 'express';
import dotenv from 'dotenv';

// import MiembroFamiliaRouter from './src/MiembroFamilia/infraestructure/routes/miembroFamiliaRouter';
// import FamiliaRouter from './src/Familia/infraestructure/routes/familiaRouter';
// import ViviendaRouter from './src/Vivienda/infraestructure/routes/viviendaRouter';
import UserRouter from './src/User/infraestructure/routes/userRouter';
import PersonaRouter from './src/Persona/infraestructure/routes/personaRouter';
import EstiloVidaRouter from './src/Estilo_Vida/infraestructure/routes/estiloVidaRouter';
import Vacunacionrouter from './src/Vacunacion/infraestructure/routes/VacunacionRouter';
import ServicioSaludRouter from './src/Servicios_salud/infraestructure/routes/serviciosSaludRouter';
import DireccionRouter from './src/Direccion/infraestructure/routes/direccionRouter';
import MaterialesConstruccionrouter from './src/MaterialesConstruccion/infraestructure/routes/materialesContruccionRouter';
dotenv.config();

const app = express();
app.use(express.json());


app.use('/sums',  UserRouter, PersonaRouter, EstiloVidaRouter,Vacunacionrouter,ServicioSaludRouter,DireccionRouter,MaterialesConstruccionrouter);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);

});
