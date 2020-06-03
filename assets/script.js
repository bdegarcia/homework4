var startButton = document.querySelector("#start-button");
var timer = document.querySelector(".timer");
var secondsLeft = 30;
var bodyText = document.getElementById("main-text");
var questionsText = document.getElementById("body-2");
var answersOptions = document.querySelectorAll("#answer");
var players = document.getElementById("#name");
var playerScore = document.getElementById("#final-score")
var questions = [
    { 
        question: "How many states are currently part of the United States?",
        answers: {
            a: '13',
            b: '50',
            c: '48',
            d: '6'},
        correctAnswer: 'c'
        },
    {
        question: "How many primary colors are there?",
        answers: {
            a: '3',
            b: '12',
            c: '1',
            d: '99'},
        correctAnswer: 'a'
        },
    {
        question: "What is the answer to THEE question?",
        answers: {
            a: '9',
            b: '777',
            c: '42',
            d: '47'},
        correctAnswer: 'c'
        },
    {
        question: "What year was Andrew Jackson elected?",
        answers: {
            a: '92',
            b: '1492',
            c: '1776',
            d: '1829'},
        correctAnswer: 'd'
        },
    {
        question: "What is the air-speed velocity of an unladen African swallow in km/h?",
        answers: {
            a: '5',
            b: '88',
            c: '26',
            d: '12'},
        correctAnswer: 'd'
        },
    {
        question: "How many red balloons are currently floating by?",
        answers: {
            a: '50',
            b: '99',
            c: '42',
            d: '7'},
        correctAnswer: 'd'
        },        
];

questionsText.style.display = "none"

startButton.addEventListener("click", game);

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

  function questions(){
        var element = document.getElementById("question");
        element.innerHTML = quiz.getQuestion().text;
        var choices = quiz.getQuestion().answers;
        for(var i = 0; i < answers.length; i++) {
            var element = document.getElementById("answer" + i);
            element.innerHTML = answer[i];
            guess("btn" + i, answer[i]);
        }
        endGame()
    };

function guess() {
    var correctAnswer = this.questions.correctAnswer
    answersOptions.addEventListener("click", function(){
        if (answerOptions === correctAnswer){
            secondsLeft + 2
        } else {
            secondsLeft - 5
        }
    })
}

function getQuestion(){
        return this.questions[this.questionIndex];
    };


function game(){
    bodyText.style.display = "none";
    questionsText.style.display = "block"

    countdown();

    questions();
};

function endGame(){
    bodyText.style.display = "block";
    questionsText.style.display = "none";
    scoreName = prompt("Great Job! Put you name on the scoreboard.");
    score = secondsLeft;
    var endGameName = document.createElement("p");
    var endGameScore = document.createElement("p");
    endGameName.textContent = scoreName;
    endGameScore.textContent = score;
    players.appendChild(endGameName);
    playerScore.appendChild(endGameScore);


}