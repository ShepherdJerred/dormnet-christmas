document.addEventListener('DOMContentLoaded', function () {
    countdown(new Date(new Date().getFullYear(), 11, 25), updateTime);
    updateFact();
}, false);

function updateTime(ts) {
    document.getElementById('countdown').innerHTML = ts.days;

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