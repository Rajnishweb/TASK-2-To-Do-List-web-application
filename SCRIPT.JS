document.addEventListener("DOMContentLoaded", function() {
    const taskInput = document.getElementById("taskInput");
    const addButton = document.getElementById("addButton");
    const taskList = document.getElementById("taskList");

    addButton.addEventListener("click", addTask);
    taskInput.addEventListener("keyup", function(event) {
        if (event.keyCode === 13) {
            event.preventDefault();
            addTask();
        }
    });

    function addTask() {
        const taskText = taskInput.value.trim();
        if (taskText !== "") {
            const li = document.createElement("li");
            li.innerHTML = `
                <span>${taskText}</span>
                <button class="delete-button">X</button>
            `;
            taskList.appendChild(li);
            taskInput.value = "";
        }
    }

    taskList.addEventListener("click", function(event) {
        if (event.target.tagName === "BUTTON") {
            const li = event.target.parentElement;
            taskList.removeChild(li);
        } else if (event.target.tagName === "SPAN") {
            event.target.classList.toggle("completed");
        }
    });
});
