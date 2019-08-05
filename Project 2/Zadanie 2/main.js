let size = 10000 + "px";
let sizeSqr = 100;
let grow = true;

document.body.style.height = size;

const div = document.createElement('div');
document.body.appendChild(div);

div.style.width = "100%";
div.style.position = "fixed";
div.style.left = 0;
div.style.top = 0;
div.style.backgroundColor = "green";
div.style.height = sizeSqr + "px";

const changeHeight = function() {
    
    if (sizeSqr > window.innerHeight / 2) {
        grow = !grow;
        div.style.backgroundColor = "red";
    }
    else if (sizeSqr <= 0) {
        grow = !grow;
        div.style.backgroundColor = "green";
    }

    if(grow) {
        sizeSqr += 10;
    }
    else {
        sizeSqr -= 10;
    }
    div.style.height = sizeSqr + "px";
}

window.addEventListener('scroll', changeHeight);