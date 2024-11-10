import express from 'express';
import {
  getAllTasksController,
  createTaskController,
  updateTaskController,
  deleteTaskController
} from '../controllers/taskController.js';

const router = express.Router();

router.get('/', getAllTasksController);  // Obtener todas las tareas
router.post('/', createTaskController);  // Crear una nueva tarea
router.put('/:id', updateTaskController);  // Actualizar una tarea por ID
router.delete('/:id', deleteTaskController);  // Eliminar una tarea por ID

export default router;
