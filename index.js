// document.getElementById("count-el").innerText = 5;

let countEl = document.getElementById("count-el")
let saveEl = document.getElementById("save-el")

let count = 0;

function increment(){
    count += 1;
    countEl.innerText = count 
}

function save(){
    let countStr = count + " - "
    saveEl.textContent += countStr
    count = 0;
    countEl.textContent = 0;
}

//This js app uses concepts:-
//Script tag
//Variables
//numbers
// strings 
// console.log()
// functions
// the DOM
// getElementById()
// innerText
// textContent