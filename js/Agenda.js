let tasks = JSON.parse(localStorage.getItem('tasks')) || {};
let selectedDate = new Date();
const taskList = document.getElementById('taskList');
const displayDate = document.getElementById('displayDate');
const taskPercentage = document.getElementById('completionPercentage');
//localStorage.clear();
document.getElementById('monthPicker').addEventListener('change', (event) => {
    const [year, month] = event.target.value.split("-");
    renderCalendar(year, month);
});

function renderCalendar(year, month) {
    const calendar = document.getElementById('calendar');
    calendar.innerHTML = "";

    const weekDays = ['D', 'L', 'M', 'M', 'J', 'V', 'S'];
    weekDays.forEach(day => {
        calendar.innerHTML += `<div class="calendar-day-header">${day}</div>`;
    });

    const firstDay = new Date(year, month - 1, 1).getDay();
    const daysInMonth = new Date(year, month, 0).getDate();

    for (let i = 0; i < firstDay; i++) {
        calendar.innerHTML += `<div class="calendar-day"></div>`;
    }

    for (let day = 1; day <= daysInMonth; day++) {
        const date = new Date(year, month - 1, day);
        calendar.innerHTML += `<div class="calendar-day" onclick="selectDate(${year}, ${month}, ${day})">${day}</div>`;
    }
}


function selectDate(year, month, day) {
    selectedDate = new Date(year, month - 1, day);
    displayDate.innerText = selectedDate.toLocaleDateString();
    document.querySelectorAll('.calendar-day').forEach(day => day.classList.remove('selected'));
    event.target.classList.add('selected');
    renderTasksForSelectedDate();
}


function renderTasksForSelectedDate() {
    const dateKey = selectedDate.toDateString();
    const weekday = selectedDate.toLocaleDateString('es-MX', { weekday: 'long' }).toLowerCase();  // Obtener el día de la semana en minúsculas
    const formattedDate = selectedDate.toLocaleDateString('es-MX', { day: 'numeric', month: 'long', year: 'numeric' });

    displayDate.innerText = `${weekday}, ${formattedDate}`;

    taskList.innerHTML = "";

    // Obtener las tareas del localStorage o iniciar un array vacío si no existen
    let dailyTasks = tasks[dateKey] || [];

    // Agregar tareas predefinidas solo si no están ya en la lista
    if (DefinedTasks[weekday]) {
        DefinedTasks[weekday].forEach(preTask => {
            // Verificar si la tarea predefinida ya está en la lista de tareas
            const taskExists = dailyTasks.some(task => task.text === preTask.text && task.time === preTask.time);
            if (!taskExists) {
                dailyTasks.push(preTask);
            }
        });
    }

    // Renderizar las tareas
    dailyTasks.forEach((task, index) => {
        const taskItem = document.createElement('li');
        taskItem.innerHTML = `
            ${task.text} (${task.time})
            <button onclick="deleteTask(${index})">Eliminar</button>
            <input type="checkbox" ${task.completed ? 'checked' : ''} onclick="toggleTask(${index})">
        `;
        taskList.appendChild(taskItem);
    });

    // Calcular el rendimiento
    calculateTaskCompletion(dailyTasks);

    // Guardar las tareas actualizadas en el localStorage
    tasks[dateKey] = dailyTasks;
    localStorage.setItem('tasks', JSON.stringify(tasks));
}




function addTask() {
    const taskText = document.getElementById('newTask').value;
    const taskTime = document.getElementById('taskTime').value;

    if (taskText && taskTime) {
        const dateKey = selectedDate.toDateString();
        tasks[dateKey] = tasks[dateKey] || [];
        tasks[dateKey].push({ text: taskText, time: taskTime, completed: false });
        localStorage.setItem('tasks', JSON.stringify(tasks));

        renderTasksForSelectedDate();
    }
}
function deleteTask(index) {
    const dateKey = selectedDate.toDateString();
    let dailyTasks = tasks[dateKey] || [];

    // Eliminar la tarea en la posición indicada
    dailyTasks.splice(index, 1);

    // Guardar las tareas actualizadas en el localStorage
    tasks[dateKey] = dailyTasks;
    localStorage.setItem('tasks', JSON.stringify(tasks));

    // Volver a renderizar las tareas del día
    renderTasksForSelectedDate();
}

function toggleTask(index) {
    const dateKey = selectedDate.toDateString();
    tasks[dateKey][index].completed = !tasks[dateKey][index].completed;
    localStorage.setItem('tasks', JSON.stringify(tasks));
    renderTasksForSelectedDate();
}

function calculateTaskCompletion(dailyTasks) {
    const completedTasks = dailyTasks.filter(task => task.completed).length;
    const totalTasks = dailyTasks.length;
    const percentage = totalTasks === 0 ? 0 : Math.round((completedTasks / totalTasks) * 100);

    taskPercentage.innerText = `${percentage}%`;
}

// Initialize calendar to current month
const now = new Date();
renderCalendar(now.getFullYear(), now.getMonth() + 1);

function updateClock() {
    const clockElement = document.getElementById('clock');
    const now = new Date();
    const hours = String(now.getHours()).padStart(2, '0');
    const minutes = String(now.getMinutes()).padStart(2, '0');
    clockElement.innerText = `${hours}:${minutes}`;
}

setInterval(updateClock, 1000);
updateClock(); // Inicializar el reloj de inmediato

const gymvideoRoutinesButton = document.getElementById('gymvideo-routines-button');
gymvideoRoutinesButton.addEventListener('click', function() {
  window.location.href = 'video.html'; 
});

//localStorage.clear();
