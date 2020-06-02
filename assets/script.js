var startButton = document.querySelector("#start-button");
var timer = document.querySelector(".timer");
var secondsLeft = 5;
var bodyText = document.getElementById("main-text");
var questionsText = document.getElementById("body-2");
var questions = [
    "How many states are currently part of the United States?",
    "How many primary colors are there?",
    "What year was Andrew Jackson elected?",
    "What is the air-speed velocity of an unladen African swallow?"
];
var quest = document.querySelector("#question");
var answer1 = document.querySelector("answer-1");
var answer2 = document.querySelector("answer-1");
var answer3 = document.querySelector("answer-1");
var answer3 = document.querySelector("answer-1");


startButton.addEventListener("click", game());

function countdown() {
    var timerInterval = setInterval(function() {
        if(secondsLeft > 0){
            secondsLeft--;
            timer.textContent = secondsLeft}
        else{
            clearInterval(timerInterval)
            timer.textContent = "GAME OVER"
            endGame()
        }
    }, 1000);
  }

function game(){
    bodyText.style.display = "none";
    questionsText.style.display = "block"

    countdown();

    questions();
};

function questions(){
    for (var i = 0; i < questions.length; i++);
    quest.textContent = questions[i];
    
}


function endGame(){
    bodyText.style.display = "block";
    questionsText.style.display = "none";
    scoreName = prompt("Great Job! Put you name on the scoreboard.");

}