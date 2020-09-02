var minutes = 10
var seconds = 0
var time = null
var intervalTime = 600;
var button = null;
	function startTimer()
	{
	    button = document.getElementById("start");
     document.getElementById("input").disabled = false;
		createPauseButton();

		time = setInterval(decreaseTimer, intervalTime);
	}
	function getTime()
	{
		document.getElementById("Timer").innerHTML = (minutes).toLocaleString('en-US', {minimumIntegerDigits: 2, useGrouping:false}) + ":" + (seconds).toLocaleString('en-US', {minimumIntegerDigits: 2, useGrouping:false});
	}
	function createStartbutton()
	{
		button.innerHTML = "Start!"
		button.onclick = resetStart;	
	}
	function resetStart()
	{
		startTimer();
		display();
	}
	function createPauseButton()
	{
		button.innerHTML = "Pause";
		button.onclick = pauseTimer;
	}
	function createResumeButton()
	{
		button.innerHTML = "Resume";
		button.onclick = resumeTimer;
	}
	function decreaseTimer()
	{
		intervalTime = intervalTime - 1;
		if(minutes == 0 && seconds == 0)
		{
      getTime()
			document.getElementById("input").disabled = false;
      return;
		}
		if(seconds == 0)
		{
			getTime()
			minutes = minutes - 1;
			seconds = 59;
		}
		else
		{
			getTime()			
			seconds = seconds - 1;
		}
	}
	function pauseTimer()
	{
		document.getElementById("input").disabled = true;
		clearInterval(time);
		createResumeButton();
	}
	function resumeTimer()
	{
		document.getElementById("input").disabled = false;
		time = setInterval(decreaseTimer, intervalTime);
		createPauseButton();
	}
	function resetTimer()
	{
		document.getElementById("input").disabled = false;
		clearInterval(time)
		minutes = 10
		seconds = 0
		intervalTime = 600;
		getTime();
		createStartbutton();
	}