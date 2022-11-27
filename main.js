"use strict";
const add = document.getElementById("add");
const clean = document.getElementById("clean");
const list = document.getElementById("list");
let arrTasks = JSON.parse(localStorage.getItem("List-tasks")) || [];

const showTasks = (arrTasks) => {
    document.getElementById("list").innerHTML = "";
    if(arrTasks.length !== 0) {
        for(let i = 0;i < arrTasks.length;i++) {
            document.getElementById("list").innerHTML += `<li class="task">${arrTasks[i]}<span class="delete" id=${i}>X</span></li>`;
        }
    }
}

document.addEventListener("DOMContentLoaded", () => {
    showTasks(arrTasks);
});

const saveTasksToStorage = (arrTasks) => {
    localStorage.setItem("List-tasks", JSON.stringify(arrTasks));
}

add.addEventListener("click",(e) => {
    e.preventDefault();
    const task = document.getElementById("text");
    if(task.value) {
        arrTasks.push(task.value);
        showTasks(arrTasks);
        saveTasksToStorage(arrTasks);
    }
    else alert("You have to write a task.");
});

list.addEventListener("click", (e) => {
    e.preventDefault();
    if(e.target.classList.contains("delete")) {
        let pos = e.target.id;
        arrTasks.splice(pos,1);
        showTasks(arrTasks);
        saveTasksToStorage(arrTasks);
    }
});

clean.addEventListener("click", (e) => {
    e.preventDefault();
    localStorage.clear();
    arrTasks = [];
    showTasks(arrTasks);
});