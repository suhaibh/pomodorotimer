var startTimeMinutes = 25;
var startTimeSeconds = "00";
window.onload = setTimer;

function setTimer(){
	timer = document.getElementById("timer");
	timer.innerHTML = startTimeMinutes + ":" + startTimeSeconds;
}

function increaseTimer(){
	startTimeMinutes++;
	timer.innerHTML = startTimeMinutes + ":" + startTimeSeconds;
}

function decreaseTimer(){
	startTimeMinutes--;
	timer.innerHTML = startTimeMinutes + ":" + startTimeSeconds;
}

var increaseTimerButton = document.getElementById("increaseTimerButton");
increaseTimerButton.onclick = increaseTimer;

var decreaseTimerButton = document.getElementById("decreaseTimerButton");
decreaseTimerButton.onclick = decreaseTimer;

function startTimer(){
	startTimeSeconds--;
	timer.innerHTML = startTimeMinutes + ":" + startTimeSeconds;

}

var startTimerButton = document.getElementById("startTimerButton");
startTimerButton.onclick = startTimer;

function stopTimer(){

}