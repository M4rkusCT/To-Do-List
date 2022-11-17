"use strict";
const send = document.getElementById("submit");
const numDay = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31];
const numMonth = [1,2,3,4,5,6,7,8,9,10,11,12];

send.addEventListener("click",(e) => {
    e.preventDefault();
    const task = document.getElementById("text");
    const date = new Date();
    document.getElementById("list").innerHTML += `<li class="task">${task.value} <small>${numMonth[date.getMonth()]}</small> <span id="delete">x</span></li>`;
});