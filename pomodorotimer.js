var startTime = 25
window.onload = setTimer;
function setTimer(){
	timer = document.getElementById("timer");
	timer.innerHTML = startTime;
}

function increaseTimer(){
	startTime++;
	timer.innerHTML = startTime;
}

function decreaseTimer(){
	startTime--;
	timer.innerHTML = startTime;
}

var increaseTimerButton = document.getElementById("increaseTimerButton");
increaseTimerButton.onclick = increaseTimer;

var decreaseTimerButton = document.getElementById("decreaseTimerButton");
decreaseTimerButton.onclick = decreaseTimer;

function startTimer(){

}

function stopTimer(){

}