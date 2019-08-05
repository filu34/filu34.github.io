const sqr = document.createElement('div');
document.body.appendChild(sqr);

let grow = true;

let size = 100; //wielkość kwadratu
sqr.style.width = size + "px";
// 100 + 'px' -> "100" + "px" -> "100px" dla CSS
sqr.style.height = size + "px";
sqr.style.backgroundColor = "black";

//maksymalna wielkość kwadratu
//window.innerWidth * 0.5

window.addEventListener('scroll', function() {
    
    if (grow) { //true
        size += 5;
        sqr.style.width = size + "px";
        sqr.style.height = size + "px";
    }
    else {
        size -= 5;
        sqr.style.width = size + "px";
        sqr.style.height = size + "px";
    }

    if (size >= window.innerWidth / 2) {
        grow = !grow; //false
    }
    else if (size == 0) {
        grow = !grow; //true
    }

})
