// ****** Timer Function ****** 
var timerEl = document.querySelector('#time-left');
var time = 60;
var timerInterval = 0;

function startTimer(){
    time = 60;
    timerEl.textContent=("Time: " + time);

    timerInterval = setInterval( function() {
        time--;
        timerEl.textContent=("Time: " + time);
    }, 1000);
}

// ****** Timer Starts when "Start Quiz" is clicked ******
var startBtn = document.querySelector("html");
var startQuiz = document.getElementById("#pre-quiz");

startBtn.addEventListener("click", function(event){
    var element = event.target;
    var state = element.getAttribute("data-state");

    if (state === "stopped") {
        element.dataset.state = "started";
        element.setAttribute("data-state", "started");
        startTimer();
        document.getElementById("pre-quiz").style.display = "none";
        document.getElementById("quiz-questions").style.display = "flex";
    }
});

//   ****** Quiz Questions ****** 
var questions = [
{
    question: "Placeholder Question 1",
    answer: 2,
    choices: ["answer 1", "answer 2", "answer 3", "answer 4"]
},
{
    question: "Placeholder Question 2",
    answer: 3,
    choices: ["answer 1", "answer 2", "answer 3", "answer 4"]
},
{
    question: "Placeholder Question 3",
    answer: 1,
    choices: ["answer 1", "answer 2", "answer 3", "answer 4"]
},
{
    question: "Placeholder Question 4",
    answer: 3,
    choices: ["answer 1", "answer 2", "answer 3", "answer 4"]
},
{
    question: "Placeholder Question 5",
    answer: 4,
    choices: ["answer 1", "answer 2", "answer 3", "answer 4"]
}
];

var questionIndex = 0;
var score = 0;

function displayQues() {
    document.getElementById("question").innerHTML = questions[questionIndex].question;
	document.getElementById("label1").innerHTML = questions[questionIndex].choices[0];
	document.getElementById("label2").innerHTML = questions[questionIndex].choices[1];
	document.getElementById("label3").innerHTML = questions[questionIndex].choices[2];
    document.getElementById("label4").innerHTML = questions[questionIndex].choices[3];
}

function checkAnswer() {
	var selectedAnswer = document.querySelector('input[name="answer"]:checked').value;
	if (selectedAnswer == questions[questionIndex].correctAnswer) {
        score++;
		document.getElementById("result").innerHTML = "Correct!";
	} else {
		document.getElementById("result").innerHTML = "Incorrect.";
        time = time - 12;
	}
	questionIndex++;
	if (questionIndex < questions.length) {
		displayQues();
	} else {
		document.getElementById("question").innerHTML = "Quiz Complete!";
		document.getElementById("label1").style.display = "none";
		document.getElementById("label2").style.display = "none";
		document.getElementById("label3").style.display = "none";
        document.getElementById("label4").style.display = "none";
		document.getElementById("result").innerHTML = "You got " + score + " out of " + questions.length + " questions correct!";
	}
}

displayQues();
