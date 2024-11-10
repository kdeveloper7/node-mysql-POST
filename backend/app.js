import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors'; // Habilitar CORS
import contactRoutes from './routes/contactRoutes.js';

dotenv.config();

const app = express();

// Middleware
app.use(cors()); // Habilitar CORS antes de las rutas
app.use(express.json()); // Permite que Express maneje las peticiones JSON

// Routes
app.use('/api/contact', contactRoutes); // Apunta a las rutas en contactRoutes.js

export default app;
