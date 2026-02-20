function updateClock() {
    var now = new Date();

    var hours = now.getHours();
    var minutes = now.getMinutes();
    var seconds = now.getSeconds();

    // Add leading zero
    if (hours < 10) {
        hours = "0" + hours;
    }
    if (minutes < 10) {
        minutes = "0" + minutes;
    }
    if (seconds < 10) {
        seconds = "0" + seconds;
    }

    var currentTime = hours + ":" + minutes + ":" + seconds;

    document.getElementById("time").innerText = currentTime;
}

// Update every 1 second
setInterval(updateClock, 1000);

// Run once when page loads
updateClock();