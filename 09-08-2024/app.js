// Clase Task que representa una tarea
class Task {
    constructor(name) {
        this.name = name;
        this.completed = false;
    }

    toggleComplete() {
        this.completed = !this.completed;
    }

    render() {
        const li = document.createElement('li');
        li.textContent = this.name;
        if (this.completed) {
            li.classList.add('completed');
        }
        li.addEventListener('click', () => {
            this.toggleComplete();
            li.classList.toggle('completed');
        });
        return li;
    }
}

// Clase TaskList que maneja una lista de tareas
class TaskList {
    constructor() {
        this.tasks = [];
    }

    addTask(task) {
        this.tasks.push(task);
    }

    render() {
        const ul = document.getElementById('taskList');
        ul.innerHTML = '';
        this.tasks.forEach(task => {
            ul.appendChild(task.render());
        });
    }
}

// Clase App que maneja la aplicación
class App {
    constructor() {
        this.taskList = new TaskList();
        this.form = document.getElementById('taskForm');
        this.input = document.getElementById('taskInput');
        this.form.addEventListener('submit', (e) => {
            e.preventDefault();
            this.addTask();
        });
    }

    addTask() {
        const taskName = this.input.value.trim();
        if (taskName) {
            const task = new Task(taskName);
            this.taskList.addTask(task);
            this.taskList.render();
            this.input.value = '';
        }
    }
}

// Inicializar la aplicación
document.addEventListener('DOMContentLoaded', () => {
    const app = new App();
});
