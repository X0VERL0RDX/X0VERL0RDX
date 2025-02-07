document.getElementById("addTask").addEventListener("click", addTask);

function addTask() {
    let taskValue = document.getElementById("taskInput").value.trim();

    if (taskValue === "") {
        alert("Task cannot be empty!");
        return;
    }

    let listItem = document.createElement("li");
    listItem.textContent = taskValue;

    let deleteBtn = document.createElement("button");
    deleteBtn.textContent = "X";
    deleteBtn.classList.add("delete-btn");
    deleteBtn.onclick = () => listItem.remove();

    listItem.appendChild(deleteBtn);
    document.getElementById("taskList").appendChild(listItem);

    document.getElementById("taskInput").value = "";
}