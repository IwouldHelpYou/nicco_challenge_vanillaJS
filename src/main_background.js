h2 = document.createElement('h2');
h2.innerText = 'hi';
body.appendChild('h2');

const images = [
    "Screenshot[1]-01.jpg",
    "Screenshot[1]-02.jpg",
    "Screenshot[1]-03.jpg",
];

function RandomNum() {
    return Math.floor(Math.random() * images.length);
}

function displayImage() {
    const num = RandomNum();
    const image = new Image();
    image.src = `./asset/${images[num]}`;
    document.getElementById("img").setAttribute("src", image.src)
    //document.body.appendChild(image);
    console.log(num, image, image.src);
}

const num = RandomNum();
//const image = new Image();
image.src = `./asset/${images[num]}`;
document.getElementById("img").setAttribute("src", image.src);
//document.body.appendChild(image);
console.log(num, image, image.src);

//window.addEventListener("load", displayImage);