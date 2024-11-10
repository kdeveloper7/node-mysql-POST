import pool from '../config/db.js';  // Asegúrate de que 'pool' es importado correctamente

// Obtener todas las tareas
const getAllTasks = async () => {
  try {
    const [rows] = await pool.execute('SELECT * FROM tasks');  // Usamos execute para las consultas
    return rows;  // Devolvemos las filas (tareas) obtenidas de la base de datos
  } catch (err) {
    console.error('Error al obtener tareas:', err);
    throw err;  // Lanza el error para ser manejado en el controlador
  }
};

// Crear una nueva tarea
const createTask = async (task) => {
  const { title, description } = task;
  try {
    const [result] = await pool.execute(
      'INSERT INTO tasks (title, description) VALUES (?, ?)',
      [title, description]
    );
    return result;  // Retorna el resultado de la inserción
  } catch (err) {
    console.error('Error al crear tarea:', err);
    throw err;
  }
};

// Actualizar una tarea existente
const updateTask = async (taskId, task) => {
  const { title, description } = task;
  try {
    const [result] = await pool.execute(
      'UPDATE tasks SET title = ?, description = ? WHERE id = ?',
      [title, description, taskId]
    );
    return result;  // Retorna el resultado de la actualización
  } catch (err) {
    console.error('Error al actualizar tarea:', err);
    throw err;
  }
};

// Eliminar una tarea
const deleteTask = async (taskId) => {
  try {
    const [result] = await pool.execute('DELETE FROM tasks WHERE id = ?', [taskId]);
    return result;  // Retorna el resultado de la eliminación
  } catch (err) {
    console.error('Error al eliminar tarea:', err);
    throw err;
  }
};

export { getAllTasks, createTask, updateTask, deleteTask };
