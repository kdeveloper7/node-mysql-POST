import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors'; // Habilitar CORS
import contactRoutes from './routes/contactRoutes.js';
import taskRoutes from './routes/taskRoutes.js'; // Agregar la ruta de tareas

dotenv.config();

const app = express();

// Middleware
app.use(cors()); // Habilitar CORS antes de las rutas
app.use(express.json()); // Permite que Express maneje las peticiones JSON

// Routes
app.use('/api/contact', contactRoutes); // Apunta a las rutas en contactRoutes.js
app.use('/api/tasks', taskRoutes); // Usar las rutas de tareas

export default app;
