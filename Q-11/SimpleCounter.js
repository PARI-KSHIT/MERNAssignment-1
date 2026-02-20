var count = 0;
var display = document.getElementById("count");

function increase() {
    count++;
    display.innerText = count;
}

function decrease() {
    count--;
    display.innerText = count;
}

function reset() {
    count = 0;
    display.innerText = count;
}