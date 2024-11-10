import { getAllTasks, createTask, updateTask, deleteTask } from '../models/taskModel.js';

// Obtener todas las tareas
const getAllTasksController = async (req, res) => {
  try {
    const tasks = await getAllTasks();  // Llamada al modelo para obtener todas las tareas
    res.json(tasks);  // Devolvemos las tareas como respuesta en formato JSON
  } catch (err) {
    console.error('Error al obtener tareas:', err);
    res.status(500).json({ message: 'Error al obtener tareas' });
  }
};

// Crear una nueva tarea
const createTaskController = async (req, res) => {
  const { title, description } = req.body;
  try {
    const newTask = { title, description };  // Preparamos los datos para la nueva tarea
    const result = await createTask(newTask);  // Llamamos al modelo para crear la tarea
    res.status(201).json({ message: 'Tarea creada con éxito', taskId: result.insertId });
  } catch (err) {
    console.error('Error al crear tarea:', err);
    res.status(500).json({ message: 'Error al crear tarea' });
  }
};

// Actualizar una tarea
const updateTaskController = async (req, res) => {
  const taskId = req.params.id;  // ID de la tarea desde los parámetros de la URL
  const { title, description } = req.body;
  try {
    const updatedTask = { title, description };  // Preparamos los datos para actualizar la tarea
    const result = await updateTask(taskId, updatedTask);  // Llamamos al modelo para actualizar la tarea
    res.json({ message: 'Tarea actualizada con éxito' });
  } catch (err) {
    console.error('Error al actualizar tarea:', err);
    res.status(500).json({ message: 'Error al actualizar tarea' });
  }
};

// Eliminar una tarea
const deleteTaskController = async (req, res) => {
  const taskId = req.params.id;  // ID de la tarea desde los parámetros de la URL
  try {
    const result = await deleteTask(taskId);  // Llamamos al modelo para eliminar la tarea
    if (result.affectedRows === 0) {
      return res.status(404).json({ message: 'Tarea no encontrada' });
    }
    res.json({ message: 'Tarea eliminada con éxito' });
  } catch (err) {
    console.error('Error al eliminar tarea:', err);
    res.status(500).json({ message: 'Error al eliminar tarea' });
  }
};

export { getAllTasksController, createTaskController, updateTaskController, deleteTaskController };
