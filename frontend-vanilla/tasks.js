const taskForm = document.getElementById('taskForm');
const taskList = document.getElementById('taskList');

// API URL
const API_URL = 'http://localhost:3000/api';

// Variable global para saber qué tarea se está editando
let editingTaskId = null;
let tasks = []; // Aquí almacenaremos las tareas obtenidas desde la API

// Función para crear o actualizar tarea
taskForm.addEventListener('submit', async (e) => {
    e.preventDefault();

    const taskData = {
        title: document.getElementById('taskTitle').value,
        description: document.getElementById('taskDescription').value
    };

    try {
        const method = editingTaskId ? 'PUT' : 'POST';
        const url = editingTaskId ? `${API_URL}/tasks/${editingTaskId}` : `${API_URL}/tasks`;

        const response = await fetch(url, {
            method: method,
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(taskData)
        });

        if (!response.ok) throw new Error('Error al crear o actualizar tarea');

        alert(editingTaskId ? 'Tarea actualizada con éxito' : 'Tarea creada con éxito');
        taskForm.reset();
        editingTaskId = null;
        loadTasks();  // Recargar la lista de tareas
    } catch (error) {
        console.error('Error:', error);
        alert('Hubo un problema al procesar la tarea');
    }
});

// Función para cargar todas las tareas
const loadTasks = async () => {
    try {
        const response = await fetch(`${API_URL}/tasks`);
        tasks = await response.json(); // Guardamos las tareas en la variable global

        taskList.innerHTML = '';

        tasks.forEach(task => {
            const li = document.createElement('li');
            li.classList.add('mb-4', 'p-4', 'bg-gray-200', 'rounded');
            li.innerHTML = `
                <h4 class="font-semibold">${task.title}</h4>
                <p>${task.description}</p>
                <button class="bg-blue-500 text-white p-2 rounded mt-2" onclick="editTask(${task.id})">Editar</button>
                <button class="bg-red-500 text-white p-2 rounded mt-2" onclick="deleteTask(${task.id})">Eliminar</button>
            `;
            taskList.appendChild(li);
        });
    } catch (error) {
        console.error('Error:', error);
        alert('Hubo un problema al cargar las tareas');
    }
};

// Función para editar tarea
const editTask = (taskId) => {
    const taskToEdit = tasks.find(t => t.id === taskId); // Encontramos la tarea que queremos editar
    if (taskToEdit) {
        editingTaskId = taskToEdit.id;
        document.getElementById('taskTitle').value = taskToEdit.title;
        document.getElementById('taskDescription').value = taskToEdit.description;
    }
};

// Función para eliminar tarea
const deleteTask = async (taskId) => {
    if (!confirm('¿Seguro que deseas eliminar esta tarea?')) return;

    try {
        const response = await fetch(`${API_URL}/tasks/${taskId}`, {
            method: 'DELETE'
        });

        if (!response.ok) throw new Error('Error al eliminar tarea');

        alert('Tarea eliminada con éxito');
        loadTasks();  // Recargar la lista de tareas
    } catch (error) {
        console.error('Error:', error);
        alert('Hubo un problema al eliminar la tarea');
    }
};

// Cargar tareas al cargar la página
loadTasks();
