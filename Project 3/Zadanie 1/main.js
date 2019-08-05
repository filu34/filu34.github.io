//Projekt nie dokończony, z braku nie wystarczającej wiedzy. 
const btn = document.querySelector('button');
let number = 5;

const div = document.createElement('div');
div.textContent = "Będę większy!";
div.style.fontSize = number + "px";

const makeBig = () => {
    number += 1;
    div.style.fontSize = `${number}px`;
}

btn.addEventListener('click', makeBig);
