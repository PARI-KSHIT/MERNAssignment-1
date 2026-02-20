let bar = document.getElementById("bar");
let percentText = document.getElementById("percent");

let count = 0;

let interval = setInterval(function(){
    if(count >= 80){
        clearInterval(interval);
    } else {
        count++;
        bar.style.width = count + "%";
        percentText.innerText = count + "%";
    }
}, 30);