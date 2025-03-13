import express from 'express';
import dotenv from 'dotenv';
import MiembroFamiliaRouter from './src/MiembroFamilia/infraestructure/routes/miembroFamiliaRouter';
import FamiliaRouter from './src/Familia/infraestructure/routes/familiaRouter';
import ViviendaRouter from './src/Vivienda/infraestructure/routes/viviendaRouter';

dotenv.config();

const app = express();
app.use(express.json());

app.use('/sums',MiembroFamiliaRouter, FamiliaRouter, ViviendaRouter);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});