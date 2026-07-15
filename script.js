const taskInput = document.getElementById("taskInput");
const addTaskBtn = document.getElementById("addTaskBtn");
const taskList = document.getElementById("taskList");

loadTasks();

addTaskBtn.addEventListener("click", addTask);

function addTask(){

    const task = taskInput.value.trim();

    if(task === ""){
        alert("Please enter a task.");
        return;
    }

    createTask(task);

    saveTask(task);

    taskInput.value = "";

}

function createTask(task){

    const li = document.createElement("li");

    li.innerHTML = `
    <span class="task-text">${task}</span>

    <div>

        <button class="complete-btn">✔</button>

        <button class="delete-btn">Delete</button>

    </div>
`;
li.querySelector(".complete-btn").addEventListener("click", () => {

    li.querySelector(".task-text").classList.toggle("completed");

});
    li.querySelector(".delete-btn").addEventListener("click", () => {

        li.remove();

        deleteTask(task);

    });

    taskList.appendChild(li);

}

function saveTask(task){

    let tasks = JSON.parse(localStorage.getItem("tasks")) || [];

    tasks.push(task);

    localStorage.setItem("tasks", JSON.stringify(tasks));

}

function loadTasks(){

    let tasks = JSON.parse(localStorage.getItem("tasks")) || [];

    tasks.forEach(task => createTask(task));

}

function deleteTask(task){

    let tasks = JSON.parse(localStorage.getItem("tasks")) || [];

    tasks = tasks.filter(t => t !== task);

    localStorage.setItem("tasks", JSON.stringify(tasks));

}
