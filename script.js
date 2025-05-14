function addTask() {
    const taskInput = document.getElementById("taskInput");
    const taskList = document.getElementById("taskList");

    if (taskInput.value.trim() !== "") {
        const li = document.createElement("li");
        li.textContent = taskInput.value;

        li.addEventListener("click", () => {
            li.classList.toggle("completed");
            saveTasks();
        });

        const deleteBtn = document.createElement("button");
        deleteBtn.textContent = "Delete";
        deleteBtn.onclick = () => {
            li.remove();
            saveTasks();
        };

        li.appendChild(deleteBtn);
        taskList.appendChild(li);
        taskInput.value = "";

        saveTasks();
    }
}

function saveTasks() {
    const taskList = document.getElementById("taskList");
    localStorage.setItem("tasks", taskList.innerHTML);
}

function loadTasks() {
    const taskList = document.getElementById("taskList");
    taskList.innerHTML = localStorage.getItem("tasks") || "";
    Array.from(taskList.children).forEach(li => {
        li.addEventListener("click", () => {
            li.classList.toggle("completed");
            saveTasks();
        });
        li.querySelector("button").onclick = () => {
            li.remove();
            saveTasks();
        };
    });
}

window.onload = loadTasks;
