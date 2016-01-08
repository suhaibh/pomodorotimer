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
	if (startTimeMinutes > 0){
		startTimeMinutes--;
		timerDisplay.innerHTML = startTimeMinutes + ":" + startTimeSeconds;	
	}
}

var increaseTimerButton = document.getElementById("increaseTimerButton");
increaseTimerButton.onclick = increaseTimer;

var decreaseTimerButton = document.getElementById("decreaseTimerButton");
decreaseTimerButton.onclick = decreaseTimer;

function startTimer(){
	breakTimerInterval = false;
	if (startTimeSeconds <= 0){
		if (startTimeMinutes <= 0){
			startTimeMinutes = 5;
			breakTimer();
			clearInterval(timerInterval);
		}
		else { 
			startTimeSeconds = "59";
			startTimeMinutes--;
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

breakTimerInterval = false;
function breakTimer(){
	breakTimerInterval = setInterval(startBreakTimer, 1000);
}

function startBreakTimer(){
	timerInterval = false;
	if (startTimeSeconds <= 0){
		if (startTimeMinutes <= 0){
			startTimer();
		}
		else {
			startTimeSeconds = "59";
			startTimeMinutes--;
		}
	}
	else {
		startTimeSeconds--;
	}
	timerDisplay.innerHTML = startTimeMinutes + ":" + startTimeSeconds;
}

// create another setinterval for break timer called when start timer ends and then when breaktimer ends clear the interval and start the start timer

var startTimerButton = document.getElementById("startTimerButton");
startTimerButton.onclick = function(){
	if (breakTimerInterval == false){
		timerInterval = setInterval(startTimer, 1000);	
	}
	else {
		breakTimer();
	}
}

var stopTimerButton = document.getElementById("stopTimerButton");
stopTimerButton.onclick = function(){
	if (breakTimerInterval == false){
		clearInterval(timerInterval);	
	}
	else { 
		clearInterval(breakTimerInterval);
	}
}