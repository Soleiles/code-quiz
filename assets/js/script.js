// GIVEN I am taking a code quiz
// WHEN I click the start button
// THEN a timer starts and I am presented with a question
// WHEN I answer a question
// THEN I am presented with another question
// WHEN I answer a question incorrectly
// THEN time is subtracted from the clock
// WHEN all questions are answered or the timer reaches 0
// THEN the game is over
// WHEN the game is over
// THEN I can save my initials and my score

// ****** Timer Function ****** 
var timerEl = document.querySelector('#time-left');
var time = 90;
var timerInterval = 0;

function startTimer(){
    time = 90;
    timerEl.textContent=("Time: " + time);

    timerInterval = setInterval( function() {
        time--;
        timerEl.textContent=("Time: " + time);
    }, 1000);
}


var startBtn = document.querySelector("html");

startBtn.addEventListener("click", function(event){
    var element = event.target;
    var state = element.getAttribute("data-state");

    if (state === "stopped") {
        element.dataset.state = "started";
        element.setAttribute("data-state", "started");
        startTimer();
    }
});

