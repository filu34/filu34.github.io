let size = 10;
let orderElement = 1;

const init = () => {
    const btn = document.createElement('button');
    document.body.appendChild(btn);
    btn.textContent = 'Create!';
    btn.style.fontSize = "22px";

    const reset = document.createElement('button');
    document.body.appendChild(reset);
    reset.textContent = "Reset...";
    reset.style.fontSize = "22px";

    const ul = document.createElement('ul');
    document.body.appendChild(ul);
    ul.style.listStyle = "none";

    btn.addEventListener('click', createLiElements);
    reset.addEventListener('click', cleanList);
    
}

const createLiElements = () => {

    console.log('Add!');
    for(let i = 0; i < 10; i++) {
        const li = document.createElement('li');
        li.textContent = `Element nr ${orderElement++}`;
        li.style.fontSize = `${size++}px`;
        document.querySelector('ul').appendChild(li);

    }
}

const cleanList = () => {
    document.querySelector('ul').textContent = "";
    size = 10;
    orderElement = 1;
}

init();