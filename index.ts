import express from 'express';
import dotenv from 'dotenv';

import MiembroFamiliaRouter from './src/MiembroFamilia/infrastructure/routes/miembroFamiliaRouter';
import FamiliaRouter from './src/Familia/infrastructure/routes/familiaRouter';
import ViviendaRouter from './src/Vivienda/infrastructure/routes/viviendaRouter';
import UserRouter from './src/User/infrastructure/routes/userRouter';
import PersonaRouter from './src/Persona/infrastructure/routes/personaRouter';
import EstiloVidaRouter from './src/Estilo_Vida/infrastructure/routes/estiloVidaRouter';

dotenv.config();

const app = express();
app.use(express.json());

app.use('/sums', MiembroFamiliaRouter, FamiliaRouter, ViviendaRouter, UserRouter, PersonaRouter, EstiloVidaRouter);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});
