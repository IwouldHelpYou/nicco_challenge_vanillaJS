const clock = document.querySelector('#clock');

function getClock() {
  const date = new Date();
  const hours = date.getHours(); //String(date.getHours()).padStart(2,"0");
  const minutes = date.getMinutes();
  const seconds = date.getSeconds(); 
  clock.innerText = `지금 시간 : ${hours}:${minutes}:${seconds}`;
}


// window.addEventListener("load", getClock);

setInterval(getClock, 1000);

const h2 = document.createElement('h2');
h2.innerText = 'hi';
document.body.append('h2');