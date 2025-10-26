var input = document.getElementsByClassName("input-main")[0];
var addBtn = document.getElementsByClassName("add-btn")[0];
var delAll = document.getElementsByClassName("del-all")[0];
var taskList = document.getElementsByClassName("task-list")[0];

function addTask() {
    var inputVal = input.value.trim();

    if (inputVal === "") {
        alert("Please enter a task!");
        return;
    }


    taskList.innerHTML += `
        <div class="list-cont">
            <ul class="main-list">
                <li>
                    <input type="text" value="${inputVal}" class="task-input" disabled>
                    <button class="edit-btn" onclick="editTask(this)">Edit</button>
                    <button class="delete-btn" onclick="deleteTask(this)">Delete</button>
                </li>
            </ul>
        </div>
    `;

    input.value = "";
}


function editTask(btn) {
    var taskInput = btn.parentNode.querySelector(".task-input");
    if (taskInput.disabled) {
        taskInput.disabled = false;
        btn.textContent = "Save";
        taskInput.focus();
    } else {
        taskInput.disabled = true;
        btn.textContent = "Edit";
    }
}


function deleteTask(btn) {
  btn.parentNode.parentNode.parentNode.remove();
}

input.addEventListener("keydown", function(event) {
    if (event.keyCode === 13) {
        addTask();
    }
});


function deleteAll() {
    taskList.innerHTML = "";
}


addBtn.addEventListener("click", addTask);
delAll.addEventListener("click", deleteAll);

