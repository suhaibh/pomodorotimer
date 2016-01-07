var startTimeMinutes = 1;
var startTimeSeconds = "00";
window.onload = setTimer;

function setTimer(){
	timerDisplay = document.getElementById("timer");
	timerDisplay.innerHTML = startTimeMinutes + ":" + startTimeSeconds;
}

function increaseTimer(){
	startTimeMinutes++;
	timerDisplay.innerHTML = startTimeMinutes + ":" + startTimeSeconds;
}

function decreaseTimer(){
	startTimeMinutes--;
	timerDisplay.innerHTML = startTimeMinutes + ":" + startTimeSeconds;
}

var increaseTimerButton = document.getElementById("increaseTimerButton");
increaseTimerButton.onclick = increaseTimer;

var decreaseTimerButton = document.getElementById("decreaseTimerButton");
decreaseTimerButton.onclick = decreaseTimer;

function startTimer(){
	if (startTimeSeconds <= 0){
		startTimeSeconds = "59";
		if (startTimeMinutes <= 0){
			startTimeMinutes = 0;
			clearInterval(timer);
			breakTimer();
		}
		else { startTimeMinutes--;
		}
	}
	else {
		if (startTimeSeconds <= 10){
				startTimeSeconds--;
				startTimeSeconds = "0" + startTimeSeconds;}
		else {
			startTimeSeconds--;
		}
	}
	timerDisplay.innerHTML = startTimeMinutes + ":" + startTimeSeconds;
}

function breakTimer(){
	startTimeMinutes = 1;
	startTimeSeconds = "00";
	timer;
	if (startTimeSeconds <= 0){
		startTimeSeconds = "59";
		if (startTimeMinutes <= 0){
			startTimeMinutes = 2;
			startTimer();
		}
	}
	else {
		startTimeSeconds--;
	}
}

// create another setinterval for break timer called when start timer ends and then when breaktimer ends clear the interval and start the start timer

var startTimerButton = document.getElementById("startTimerButton");
startTimerButton.onclick = function(){
	timer = setInterval(startTimer, 1000);
}

var stopTimerButton = document.getElementById("stopTimerButton");
stopTimerButton.onclick = function(){
	clearInterval(timer);
}