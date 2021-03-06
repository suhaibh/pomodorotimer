var startTimeMinutes = 25;
var startTimeSeconds = "00";
window.onload = setTimer;

function setTimer(){
	timerDisplay = document.getElementById("timer");
	timerDisplay.innerHTML = startTimeMinutes + ":" + startTimeSeconds;
}

function increaseTimer(){
	startTimeMinutes++;
	timerDisplay.innerHTML = startTimeMinutes + ":" + startTimeSeconds;
	startTimerButton.className = "fa fa-play fa-lg";
	if (timerIntervalOn) {
		clearInterval(timerInterval);
	}
	else {
		clearInterval(breakTimerInterval);
	}
}

function decreaseTimer(){
	if (startTimeMinutes > 0){
		startTimeMinutes--;
		timerDisplay.innerHTML = startTimeMinutes + ":" + startTimeSeconds;
		if (timerIntervalOn) {
			clearInterval(timerInterval);
		}
		else {
			clearInterval(breakTimerInterval)
		}
		startTimerButton.className = "fa fa-play fa-lg";
	}
}

var increaseTimerButton = document.getElementById("increaseTimerButton");
increaseTimerButton.onclick = increaseTimer;

var decreaseTimerButton = document.getElementById("decreaseTimerButton");
decreaseTimerButton.onclick = decreaseTimer;

function startTimer(){
	timerIntervalOn = true;
	breakTimerOn = false;
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

breakTimerOn = false;
function breakTimer(){
	breakTimerInterval = setInterval(startBreakTimer, 1000);

}

function startBreakTimer(){
	breakTimerOn = true;
	timerIntervalOn = false;
	if (startTimeSeconds <= 0){
		if (startTimeMinutes <= 0){
			startTimeMinutes = 25;
			startWorkTimer();
			clearInterval(breakTimerInterval);
		}
		else {
			startTimeSeconds = "59";
			startTimeMinutes--;
		}
	}
	else {
		if (startTimeSeconds <= 10){
			startTimeSeconds--;
			startTimeSeconds = "0" + startTimeSeconds;
		}
		else{
			startTimeSeconds--;
		}
	}
	timerDisplay.innerHTML = startTimeMinutes + ":" + startTimeSeconds;
}

function startWorkTimer(){
	timerInterval = setInterval(startTimer, 1000);
}

// create another setinterval for break timer called when start timer ends and then when breaktimer ends clear the interval and start the start timer

// see if you can decrease the delay between pressing play and the start of the clock by nesting some if statements


var startTimerButton = document.getElementById("startTimerButton");
startTimerButton.onclick = function(){
	if (breakTimerOn == false && startTimerButton.className == "fa fa-play fa-lg"){
		startWorkTimer();
		startTimerButton.className = "fa fa-pause fa-lg"
	}
	else if (breakTimerOn == false && startTimerButton.className == "fa fa-pause fa-lg"){
		clearInterval(timerInterval);
		startTimerButton.className = "fa fa-play fa-lg";
	}

	else if (timerIntervalOn == false && startTimerButton.className == "fa fa-play fa-lg"){
		breakTimer();
		startTimerButton.className = "fa fa-pause fa-lg";
	}

	else if (timerIntervalOn == false && startTimerButton.className == "fa fa-pause fa-lg"){
		clearInterval(breakTimerInterval);
		startTimerButton.className = "fa fa-play fa-lg";
	}
}

var resetTimerButton = document.getElementById("resetTimerButton");
resetTimerButton.onclick = function(){
	if (breakTimerOn == true){
		clearInterval(breakTimerInterval);
		startTimerButton.className = "fa fa-play fa-lg";
	}
	else {
		clearInterval(timerInterval);
		startTimerButton.className = "fa fa-play fa-lg";
	}
	startTimeMinutes = 25;
	startTimeSeconds = "00";
	timer.innerHTML = startTimeMinutes + ":" + startTimeSeconds;
}