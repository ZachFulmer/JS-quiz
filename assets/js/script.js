// Variable Declarations
var countTimer = 75;
var questionCount = 0;

var hsTimerBar = document.querySelector("#nav-bar");

var mainView = document.querySelector("#main");


// Creates the series of question/answer content
var quizObj = [
    {
        question: "Inside which HTML element do we put the JavaScript?",
        answer1: "<scripting>",
        answer2: "<js>",
        answer3: "<javascript>",
        answer4: "<script>",
        correctAnswer: "<script>",
        answered: false
    },
    {
        question: 'How do you write "Hello World" in an alert box?',
        answer1: 'msgBox("Hello World")',
        answer2: 'msg("Hello World")',
        answer3: 'alertBox("Hello World")',
        answer4: 'alert("Hello World")',
        correctAnswer: 'alert("Hello World")',
        answered: false
    },
    {
        question: "How to write an IF statement in JavaScript?",
        answer1: "if i=5 then",
        answer2: "if (i==5)",
        answer3: "if i=5",
        answer4: "if i==5 then",
        correctAnswer: "if (i==5)",
        answered: false
    },
    {
        question: "How does a WHILE loop start?",
        answer1: "while (i<=10)",
        answer2: "while (i<=10;i++)",
        answer3: "while i=1 to 10",
        answer4: "while (i++)",
        correctAnswer: "while (i<=10)",
        answered: false
    },
    {
        question: "What is the correct way to write a JavaScript array?",
        answer1: "var colors = ['red','green','blue']",
        answer2: "var colors = (1:]red], 2:'green', 3:'blue')",
        answer3: "var colors = 'red', 'green', 'blue'",
        answer4: "var colors = 1 = ('red'), 2 = ('green'), 3 = ('blue')",
        correctAnswer: "var colors = ['red','green','blue']",
        answered: false
    }
]

// Start Quiz && Home Screen
var startQuiz = function()
{
    // Reset timer & Question Count
    countTimer = 75;
    questionCount = 0;
    
    // Create Elements
    var homeTitleEl = document.createElement("h2");
    var homeTextEl1 = document.createElement("p");
    var homeTextEl2 = document.createElement("p");
    var homeTextEl3 = document.createElement("p");
    var startBtnEl = document.createElement("button");

    // Add text to a class for styling
    homeTextEl1.className = "instructions";
    homeTextEl2.className = "instructions";
    homeTextEl3.className = 'instructions';
    startBtnEl.className = "buttonGeneral";
    homeTextEl1.id = "instructionsText1";
    homeTextEl2.id = "instructionsText2";
    homeTextEl3.id = 'instructionsText3';
    startBtnEl.id = "startButton";

    // Add attributes to each element and append them to the mainView
    homeTitleEl.textContent = "Javascript Quiz Challenge";
    homeTextEl1.textContent = "Try to answer the following code-related questions within the time limit.";
    homeTextEl2.textContent = "Keep in mind that incorrect answers will penalize your score/time by ten seconds."
    homeTextEl3.textContent = 'Press "Start Quiz" to begin!';
    startBtnEl.textContent = "Start Quiz";
    mainView.appendChild(homeTitleEl);
    mainView.appendChild(homeTextEl1);
    mainView.appendChild(homeTextEl2);
    mainView.appendChild(homeTextEl3);
    mainView.appendChild(startBtnEl);

    // Style Main Page
    hsTimerBar.style.visibility = "visible";
    mainView.style.justifyContent = "center";
}

var startBtnHandler = function(event)
{
    // clear the main screen if start button is clicked and proceed to questionaire
    if(event.target.matches("#startButton"))
    {
        document.getElementById("startButton").remove();
        document.getElementById("instructionsText1").remove();
        document.getElementById("instructionsText2").remove();
        document.getElementById("instructionsText3").remove();

        // Create Answer text boxes
        var answer1 = document.createElement("div");
        var answer2 = document.createElement("div");
        var answer3 = document.createElement("div");
        var answer4 = document.createElement("div");
        answer1.id = "A1";
        answer2.id = "A2";
        answer3.id = "A3";
        answer4.id = "A4";

        // Append new elements to mainview
        mainView.appendChild(answer1);
        mainView.appendChild(answer2);
        mainView.appendChild(answer3);
        mainView.appendChild(answer4);

        updateQuestionionaire();
    }
}

var updateQuestionionaire = function()
{
    mainView.style.textAlign = "left";
    mainView.style.alignItems = "flex-start";

    var questionEl = document.querySelector("#main h2");
    var answer1 = document.getElementById("A1");
    var answer2 = document.getElementById("A2");
    var answer3 = document.getElementById("A3");
    var answer4 = document.getElementById("A4");

    // Update Mainview with first question
    questionEl.textContent = quizObj[0].question;
    answer1.textContent = "A. " + quizObj[0].answer1;
    answer2.textContent = "B. " + quizObj[0].answer2;
    answer3.textContent = "C. " + quizObj[0].answer3;
    answer4.textContent = "D. " + quizObj[0].answer4;


}

// Home Screen with Start Quiz Button

// For loop with question: 4 Answer buttons: Display High-scores (Go-Back/Clear High Scores)

// Submit Score and Enter Initials

// High-Score Page

mainView.addEventListener("click",startBtnHandler);
startQuiz();