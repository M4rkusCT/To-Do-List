"use strict";
const add = document.getElementById("submit");
const list = document.getElementById("list");
// const numDay = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31];
// const numMonth = [1,2,3,4,5,6,7,8,9,10,11,12];
let arrTasks = JSON.parse(localStorage.getItem("List-tasks")) || [];

const show = (arrTasks) => {
    document.getElementById("list").innerHTML = "";
    // const date = new Date();
    for(let i = 0;i < arrTasks.length;i++) {
        document.getElementById("list").innerHTML += `<li class="task">${arrTasks[i]} <span class="delete" id=${i}>X</span></li>`;
    }
}

document.addEventListener("DOMContentLoaded", () => {
    show(arrTasks);
});

const saveTasksToStorage = (arrTasks) => {
    localStorage.setItem("List-tasks", JSON.stringify(arrTasks));
}

add.addEventListener("click",(e) => {
    e.preventDefault();
    const task = document.getElementById("text");
    arrTasks.push(task.value);
    show(arrTasks);
    saveTasksToStorage(arrTasks);
});

list.addEventListener("click", (e) => {
    e.preventDefault();
    let pos = e.target.id;
    arrTasks.splice(pos,1);
    show(arrTasks);
    saveTasksToStorage(arrTasks);
});