document.getElementById("task-title").addEventListener("keypress", function(event) {
    if (event.key === "Enter") {
        addTask();
    }
});

document.getElementById("task-input").addEventListener("keypress", function(event) {
    if (event.key === "Enter") {
        addTask();
    }
});

function addTask() {
    let taskTitleInput = document.getElementById("task-title");
    let taskInput = document.getElementById("task-input");
    let errorMessage = document.getElementById("error-message");
    let taskTitle = taskTitleInput.value.trim();
    let taskText = taskInput.value.trim();
    
    if (!taskTitle) {
        errorMessage.textContent = "הכנס שם משימה";
        return;
    }
    if (!taskText) {
        errorMessage.textContent = "הכנס משימה";
        return;
    }
    errorMessage.textContent = "";
    
    let li = document.createElement("li");
    let container = document.createElement("div");
    container.classList.add("task-text");
    
    let titleSpan = document.createElement("strong");
    titleSpan.textContent = taskTitle + ": ";
    
    let span = document.createElement("span");
    span.textContent = taskText;
    
    container.appendChild(titleSpan);
    container.appendChild(span);
    
    let buttonContainer = document.createElement("div");
    
    let doneButton = document.createElement("button");
    doneButton.textContent = "✔";
    doneButton.onclick = function() {
        span.classList.toggle("completed");
    };
    
    let deleteButton = document.createElement("button");
    deleteButton.textContent = "❌";
    deleteButton.onclick = function() {
        li.remove();
    };
    
    buttonContainer.appendChild(doneButton);
    buttonContainer.appendChild(deleteButton);
    
    li.appendChild(container);
    li.appendChild(buttonContainer);
    
    document.getElementById("task-list").appendChild(li);
    taskTitleInput.value = "";
    taskInput.value = "";
}
