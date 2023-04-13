// ****** Timer Function ****** 
var timerEl = document.querySelector('#time-left');
var time = 60;
var timerInterval = 0;

function startTimer(){
    time = 60;
    timerEl.textContent=("Time: " + time);
    timerInterval = setInterval( function() {
        if (time > 0){
        time--;
        timerEl.textContent=("Time: " + time);
        } else{
            clearInterval(timerInterval);
            endQuiz();
            timerEl.textContent=("Time: 0");
        }
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
    question: "Which of the following is the correct way to write a JavaScript array?",
    correctAnswer: 4,
    choices: ["var colors = 'red', 'green', 'blue'", "var colors = 1 = ('red'), 2 = ('green'), 3 = ('blue')", "var colors = (1:'red', 2:'green', 3:'blue'", "var colors = ['red', 'green', 'blue'"]
},
{
    question: "In JavaScript, the following loop will execute ________ times. for (x=1; x<11; x++)",
    correctAnswer: 2,
    choices: ["9", "10", "11", "not enough information from the Script"]
},
{
    question: "What kind of statement allows a block code to run only if a certain condition is true?",
    correctAnswer: 1,
    choices: ["if statement", "else statement", "for loop", "while loop"]
},
{
    question: "What is the difference between var and const?",
    correctAnswer: 1,
    choices: ["var can be updated or re-declared", "const can be updated or re-declared", "const is not a declaration", "They are the same"]
},
{
    question: "How would you write a conditional statement to execute only if 'i' is equal to 5?",
    correctAnswer: 3,
    choices: ["if i==5 then", "if i=5 then", "if (i==5)", "if i=5"]
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

function endQuiz() {
    document.getElementById("question").innerHTML = "Quiz Complete!";
		document.getElementById("label1").style.display = "none";
		document.getElementById("label2").style.display = "none";
		document.getElementById("label3").style.display = "none";
        document.getElementById("label4").style.display = "none";
        document.getElementById("inputs").style.display = "none";
		document.getElementById("result").innerHTML = "You got " + score + " out of " + questions.length + " questions correct!";
        document.getElementById("initials").style.display = "flex";
}

function checkAnswer() {
	var selectedAnswer = document.querySelector('input[name="answer"]:checked').value;
	if (selectedAnswer == questions[questionIndex].correctAnswer) {
        score++;
		document.getElementById("result").innerHTML = "Correct!";
	} else {
		document.getElementById("result").innerHTML = "Incorrect.";
        time = time - 15;
	}
	questionIndex++;
	if (questionIndex < questions.length) {
		displayQues();
	} else {
		endQuiz();
	}
}

displayQues();

// ****** Input Score and Initials ******
var initials = document.getElementById("name");
var saveButton = document.getElementById("submit");
var scores = document.getElementById("scores");

function saveScore(){
    var initScore = {
        score: score,
        initials: initials.value,    
    }
    localStorage.setItem("initScore", JSON.stringify(initScore));
}
function renderLastScore() {
    var lastScore = JSON.parse(localStorage.getItem("initScore"));
    if (lastScore !== null) {
    document.getElementById("name").innerHTML = lastScore.initials;
    } else {
      return;
    }
  }
  submit.addEventListener("click", function(event) {
    event.preventDefault();
    saveScore();
    renderLastScore();

});


const highscorebtn = document.getElementById("view-highscore")

function displayHighScores(){
    document.getElementById('scoreboard').style.display = "flex";
};

highscorebtn.addEventListener("click", function() {
    displayHighScores();
});

