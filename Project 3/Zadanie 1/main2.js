const btn = document.querySelector('button');
const liItems = document.querySelectorAll('li');
let fontSize = 10;

btn.addEventListener('click', () => {
    console.log('Działa!');
    fontSize++;
    for (let i = 0; i < liItems.length; i++) {
        liItems[i].style.display = 'block';
        liItems[i].style.fontSize = `${fontSize}px`;
    }
})