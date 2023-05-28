const colors = [
    "#ef5777",
    "#575fcf",
    "#4bcffa",
    "#34e7e4",
    "#0be881",
    "#f53b57",
    "#3c40c6",
    "#0fbcf9",
    "#00d8d6",
    "#05c46b",
    "#ffc048",
    "#ffdd59",
    "#ff5e57",
    "#d2dae2",
    "#485460",
    "#ffa801",
    "#ffd32a",
    "#ff3f34"
  ];
  
  const body = document.querySelector("body");
  const button = document.getElementById("btn");
  let num1;
  let num2;
  
  function RandomNum() {
    return Math.floor(Math.random() * colors.length);
  }
  
  function SelectColor() {
    //button.classList.toggle('on');
    num1 = RandomNum();
    num2 = RandomNum();
    body.style.setProperty("--color1", colors[num1]);
    body.style.setProperty("--color2", colors[num2]);
  }
  
  button.addEventListener("click", SelectColor);
  
  /*
  let root = document.querySelector(':root');
  let variables = getComputedStyle(root);
  variables.getPropertyValue('--hover');
  */
  