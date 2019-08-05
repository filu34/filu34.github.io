//Size of body on site (CSS Styling by JavaScript).
document.body.style.height = "100vh";
document.body.style.margin = "0";

//Selecting h1 element.
const h1 = document.createElement("h1");
document.body.appendChild(h1);

//CSS Styling of h1 element.
h1.style.position = "fixed";
h1.style.top = "50%";
h1.style.left = "50%";
h1.style.transform = "translate(-50%, -50%)";
h1.style.fontSize = "40px";
h1.style.fontFamily = "arial";

//Event - if I'm going to move a mouse on <body></body>, I'll see mouse postion.
document.body.addEventListener('mousemove', (e) => {
    const x = e.clientX;
    const y = e.clientY;
    const width = window.innerWidth;
    const height = window.innerHeight;

    const red = x / width * 100; //100%;
    const green = y / height * 100;
    const blue = ((x / width * 100) + (y / height * 100)) / 2;

    console.log(x, y);
    h1.textContent = `${x}, ${y}`;

//Changing color of the <body></body>, what depends thanks to the mouse position.
    document.body.style.backgroundColor = `rgb(${red}%, ${green}%, ${blue}%)`;


})