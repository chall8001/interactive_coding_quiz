//click start button 
//ref startBtn on DOM 
//addonclick Event 
//ref timerEl 
//use set interval-- end game when it reaches zero
//display question and choices 
//ref DOM
//display questions on DOM
//store all the write answers to questions in one array 
//loop thru my questions 
//display each choice on DOM 
//add event listeners for each button, if the correct button is clicked, show next question
//if an incorrect event lister is clicked, show next question and, subtract time 
//when all questions are answerd, game over 
//when time reaches 0, game over

//questions used for game
var question1 = {
  questions: "I couldn't get all the buttons to print, do I still get an A?",
  answers: ["yes","no","maybe"],
  correct: "no",
}

var question2 = {
  questions: "is coding fun?",
  answers: ["yes","no", "maybe"],
  correct: "yes"
}
//index to change question array 
var currentIndex = 0
var questionArray = [question1, question2]



//define variables needed and reference html in global memory
var start = document.getElementById("startBtn")
var timeEl = document.getElementById("timer")
var UserInput = document.getElementById("answer")
var quizEl = document.getElementById("questions")
var startPage = document.getElementById("starting-page")
var questPage = document.getElementById("question-page")
var finalScore = document.getElementById("scoreBoard")
var leaderBoard = document.getElementById("submit-score")

//player's score
score = 0

//this hides the start page div, displays the first question, and executes the timer
function startQuiz(){
  setTime()
  startPage.setAttribute("class", "hide")
  questPage.removeAttribute("class",)
  newQuestion()
  newAnswer()
}
//this displays a new question to the user
function newQuestion(){
  var currentQuestion = questionArray[currentIndex]
  quizEl.textContent =  currentQuestion.questions
  console.log(currentQuestion)
}

//verifies wether the correct button is selected 

function newAnswer(){
  var currentQuestion = questionArray[currentIndex]
  var i;
for (i = 0; i <currentQuestion.answers.length; i++) { 
  var answerBtn = document.createElement("button")
  UserInput.appendChild(answerBtn)
    answerBtn.innerHTML = currentQuestion.answers[i++]
    UserInput.setAttribute("class", "answers")}

  answerBtn.addEventListener("click", checkAnswer)
  function checkAnswer(){
    if (currentQuestion.correct){
    newQuestion()}
    else{ console.log("incorrect!") 
    newQuestion(i++)
  }
  }
} 
  
//add event listeners that deploys 
start.addEventListener("click", startQuiz)
//timer
function setTime() {
  // Sets interval in variable
  var secondsLeft = 10
  var timerInterval = setInterval(function() {
    secondsLeft--;
    timeEl.textContent = "You have "+secondsLeft+ " seconds left.";

    if(secondsLeft === 0) {
      // Stops execution of action at set interval
      clearInterval(timerInterval);
      questPage.setAttribute("class","hide")
      finalScore.removeAttribute("class",)

    }

  }, 1000)
}
//leaderboard and local memory storage

leaderBoard.addEventListener("click", highScore)
function highScore(){
  localStorage.setItem(leaderBoard, score);
  localStorage.getItem(leaderBoard, score);
}

highScore()


  

