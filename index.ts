import express from 'express';
import dotenv from 'dotenv';
import UserRouter from './src/User/infraestructure/routes/userRouter';
import PersonaRouter from './src/Persona/infraestructure/routes/personaRouter';
import EstiloVidarouter from './src/Estilo_Vida/infraestructure/routes/estiloVidaRouter';
dotenv.config();

const app = express();
app.use(express.json());

app.use('/sums', UserRouter,PersonaRouter,EstiloVidarouter);
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});
