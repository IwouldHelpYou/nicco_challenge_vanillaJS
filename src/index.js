/* #1 
const colors = ["#1abc9c", "#3498db", "#9b59b6", "#f39c12", "#e74c3c"];

const target = document.querySelector(".view");


//윈도우 최대 넓이
const max = screen.availWidth;



const superEventHandler = {
  enter: () => {
    target.style.color = colors[0];
    target.innerText = "The mouse is here!";
  },
  leave: () => {
    target.style.color = colors[1];
    target.innerText = "The mouse is gone!";
  },
  "r.click": () => {
    target.style.color = colors[2];
    target.innerText = "That was a right click!";
  },
  resize: () => {
    if(0.7*max <= window.innerWidth && window.innerWidth <= max) {
      target.classList.add('on1')
      target.classList.remove('on2');
      target.classList.remove('on3');
    }
    else if(0.4*max <= window.innerWidth && window.innerWidth < 0.7*max) {
      target.classList.add('on2')
      target.classList.remove('on1');
      target.classList.remove('on3');
    }
    else {
      target.classList.add('on3');
      target.classList.remove('on1');
      target.classList.remove('on2');
    }}
  };

target.addEventListener("mouseenter", superEventHandler["enter"]);
target.addEventListener("mouseleave", superEventHandler["leave"]);
target.addEventListener("contextmenu", superEventHandler["r.click"]);
window.addEventListener("resize", superEventHandler["resize"]);
*/



/* #2
let max_value;
let guess_value;
let machine_value;

//const maxim_button = document.querySelector('max_button');
const maxim_button = document.querySelector('#max_button');
const guess_button = document.querySelector('#guess_button');


const explain = document.body.querySelector('#explain');
const result = document.body.querySelector('#result');

explain.hidden = true;
result.hidden = true;

function drawResult(machine_value, guess_value){
  if (machine_value == guess_value) {
    explain.innerText = `You chose : ${guess_value}, the machine chose: ${machine_value}.`
    result.innerText = `You won!`;
  } else {
    const h3 = document.createElement('h3')
    explain.innerText = `You chose : ${guess_value}, the machine chose: ${machine_value}.`
    result.innerText = `You lost!`;
  }
  explain.hidden = false;
  result.hidden = false;
}

function RandomMaker(max_value){
  machine_value = Math.ceil(Math.random() * max_value);
  console.log(machine_value);
}

guess_button.addEventListener('click', (e) => {
  e.preventDefault();
  guess_value = document.querySelector('#guess').value;
  max_value = document.querySelector('#max').value;
  console.log(machine_value, guess_value);
  RandomMaker(max_value);
  drawResult(machine_value, guess_value);
});
*/



/* #3 */

const display = document.getElementById('display');

function Dday(){
const date = new Date();
const Xmas_date = new Date("2023-12-25:00:00:00+0900");

const date_now_ms = date.getTime();
const date_xmas_ms = Xmas_date.getTime(); 

const diff_ms = date_xmas_ms - date_now_ms;
const diff_s = diff_ms / 1000;
const diff_m = diff_s / 60;
const diff_h = diff_m / 60;
const diff_d = diff_h / 24;
const diff_y = diff_d / 365;
console.log(Math.floor(diff_d));
const msg = `${Math.floor(diff_d)}d ${Math.floor(diff_h%24)}h ${Math.floor(diff_m%60)}m ${Math.floor(diff_s%60)}s`;
display.innerText = msg;
}

setInterval(Dday,1000);
