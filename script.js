let countdown;
const btns = document.querySelectorAll('.timerBtn');
const display = document.querySelector('.displayTime');

//clears the timer if you click a new one while the other one is still running
function timer(seconds) {
    clearInterval(countdown);


//add current date to variable and compares it with the amount of seconds added to get the minutes of the timer
    const now = Date.now();
    const then = now + seconds * 1000;
    displayTime(seconds);
    

    //a interval to run every second to make the time counter go down every second.
    countdown = setInterval(() => {
        const secondsLeft = Math.round((then - Date.now()) / 1000);
        if(secondsLeft < 0) {
            return;
        } else {
            displayTime(secondsLeft);
        }
    }, 1000);
}

//Converts the seconds to minutse and displays it on the screen and also in document title.
function displayTime(seconds) {
    const mins = Math.floor(seconds / 60);
    seconds = seconds % 60;
    display.innerHTML = `${mins}:${seconds < 10 ? '0' : ''}${seconds}`;
    document.title = display.innerHTML;
}


//takes seconds from the buttons with pre-set times and pushes the amount of seconds in to timer function
btns.forEach(btn => btn.addEventListener('click', function() {
    const seconds = parseInt(this.value);
    timer(seconds);
}));


//takes the minutes added through the custom input and converts it to seconds when pushing it to timer function
document.customForm.addEventListener('submit', function(e) {
    e.preventDefault();
    const mins = Math.round(this.minutes.value);
    timer(mins * 60);
    this.reset();
});