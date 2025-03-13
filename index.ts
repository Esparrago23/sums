
import express from 'express';
import dotenv from 'dotenv';
import Router from './src/User/infraestructure/routes/userRouter';

dotenv.config();

const app = express();
app.use(express.json());

app.use('/sums', Router);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});
