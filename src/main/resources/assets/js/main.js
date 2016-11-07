document.addEventListener('DOMContentLoaded', function () {
    countdown(new Date(new Date().getFullYear(), 11, 25), updateChristmasTime);
    countdown(new Date(new Date().getFullYear(), 10, 28), updateLightingTime);
    updateFact();
}, false);

function updateChristmasTime(ts) {
    document.querySelector('#christmasTime .days').innerHTML = ts.days + ts.months * 30;
    document.querySelector('#christmasTime .hours').innerHTML = ts.hours;
    document.querySelector('#christmasTime .minutes').innerHTML = ts.minutes;
    document.querySelector('#christmasTime .seconds').innerHTML = ts.seconds;
}

function updateLightingTime(ts) {
    document.querySelector('#lightingTime .days').innerHTML = ts.days + ts.months * 30;
}

function showNotification() {

}

function updateFact() {
    var request = new XMLHttpRequest();
    request.onload = function () {
        var fileContent = this.responseText;
        var fileContentLines = fileContent.split('\n');
        var randomLineIndex = Math.floor(Math.random() * fileContentLines.length);
        var randomLine = fileContentLines[randomLineIndex];
        document.getElementById('fact').innerHTML = randomLine;
    };
    request.open('GET', '/js/facts.txt', true);
    request.send();
}