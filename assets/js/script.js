// Variable Declarations
var countTimer = 75;
var questionCount = 0;

var hsTimerBar = document.querySelector("#nav-bar");

var mainView = document.querySelector("#main");


// Creates the series of question/answer content
var quizObj = [
    {
        question: "Inside which HTML element do we put the JavaScript?",
        answer1: "A. <scripting>",
        answer2: "B. <js>",
        answer3: "C. <javascript>",
        answer4: "D. <script>",
        correctAnswer: "D. <script>",
        answered: false
    },
    {
        question: 'How do you write "Hello World" in an alert box?',
        answer1: 'A. msgBox("Hello World")',
        answer2: 'B. msg("Hello World")',
        answer3: 'C. alertBox("Hello World")',
        answer4: 'D. alert("Hello World")',
        correctAnswer: 'D. alert("Hello World")',
        answered: false
    },
    {
        question: "How to write an IF statement in JavaScript?",
        answer1: "A. if i=5 then",
        answer2: "B. if (i==5)",
        answer3: "C. if i=5",
        answer4: "D. if i==5 then",
        correctAnswer: "B. if (i==5)",
        answered: false
    },
    {
        question: "How does a WHILE loop start?",
        answer1: "A. while (i<=10)",
        answer2: "B. while (i<=10;i++)",
        answer3: "C. while i=1 to 10",
        answer4: "D. while (i++)",
        correctAnswer: "A. while (i<=10)",
        answered: false
    },
    {
        question: "What is the correct way to write a JavaScript array?",
        answer1: "A. var colors = ['red','green','blue']",
        answer2: "B. var colors = (1:'red', 2:'green', 3:'blue')",
        answer3: "C. var colors = 'red', 'green', 'blue'",
        answer4: "D. var colors = 1 = ('red'), 2 = ('green'), 3 = ('blue')",
        correctAnswer: "A. var colors = ['red','green','blue']",
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

var BtnHandler = function(event)
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

        timer = setInterval(function(){
            if(countTimer > 0)
            {  
                countTimer -= 1;
                document.getElementById("quiz-timer").textContent = "Time: " + countTimer.toString();
            }
            else
            {
                // clear Interval if at min
                clearInterval(timer);
            }
        }, 1000);
        updateQuestionionaire(questionCount);
    }

    // if an answer is selected during the questionaire
    if(event.target.matches("#A1") || event.target.matches("#A2") || event.target.matches("#A3") || event.target.matches("#A4"))
    {
        if(event.target.textContent === quizObj[questionCount].correctAnswer)
        {
            // proceed to new question
            quizObj[questionCount].answered = true;
            isCorrect(true);
        }
        else
        {
            countTimer -= 10;
            isCorrect(false);
        }
        
        // Proceed to next question or end game
        questionCount++;
        if(questionCount == quizObj.length)
        {
            // Stop Timer to maintain user score
            clearInterval(timer);

            // Jump to submit score page
            quizComplete();
        }
        else
        {
            updateQuestionionaire(questionCount);
        }
    }

    if(event.target.matches("#submitInitalsBtn"))
    {
        var savedInitials = document.getElementById("submitInitials").value;
        
        var removeEl = document.getElementById("DeleteSubmitDiv");

        removeEl.remove();

        localStorage.setItem(savedInitials, countTimer.toString());

        document.querySelector("#main h2").textContent = "High Scores";
        var highscoreEl = document.createElement("p");
        highscoreEl.textContent = localStorage.getItem(savedInitials);
        mainView.appendChild(highscoreEl);

        highscoreEl.textContent = savedInitials + "         " + countTimer.toString();
    }
}

var updateQuestionionaire = function(questionNumber)
{
    mainView.style.textAlign = "left";
    mainView.style.alignItems = "flex-start";

    var questionEl = document.querySelector("#main h2");
    var answer1 = document.getElementById("A1");
    var answer2 = document.getElementById("A2");
    var answer3 = document.getElementById("A3");
    var answer4 = document.getElementById("A4");

    // Update Mainview with first question
    questionEl.textContent = quizObj[questionNumber].question;
    answer1.textContent = quizObj[questionNumber].answer1;
    answer2.textContent = quizObj[questionNumber].answer2;
    answer3.textContent = quizObj[questionNumber].answer3;
    answer4.textContent = quizObj[questionNumber].answer4;


}

var isCorrect = function (isTrue)
{
    var checkAnswerEl = document.createElement("p");
    mainView.appendChild(checkAnswerEl);

    if(isTrue)
    {
        checkAnswerEl.textContent = "Correct!";
    }
    else
    {
        checkAnswerEl.textContent = "Incorrect!";
    }
    setTimeout(function(){ checkAnswerEl.remove();}, 1000);
}

var quizComplete = function()
{
    var titleEl = document.querySelector("#main h2");
    var answer1 = document.getElementById("A1");
    var answer2 = document.getElementById("A2");
    var answer3 = document.getElementById("A3");
    var answer4 = document.getElementById("A4");

    // Clean up from questionaire
    answer1.remove();
    answer2.remove();
    answer3.remove();
    answer4.remove();
    mainView.style.textAlign = "center";
    titleEl.innerHTML = "Your score: " + countTimer.toString() + " </br>Enter your initials to save your score!";

    var submitInitials = document.createElement("div");
    var inputInitials = document.createElement("input");
    var submitBtn = document.createElement("button");
    submitBtn.className = "buttonGeneral";
    submitBtn.id = "submitInitalsBtn";
    submitInitials.className = "submitInitialsDiv";
    submitInitials.id = "DeleteSubmitDiv";
    submitBtn.textContent = "Submit";
    inputInitials.id = "submitInitials";
    inputInitials.type = "text";
    inputInitials.size = "10";
    submitInitials.appendChild(inputInitials);
    submitInitials.appendChild(submitBtn);
    mainView.appendChild(submitInitials);


}

var highScoreHandler = function(event)
{
    if(event.target.matches("#high-score-btn"))
    {
        console.log("high-score button was pressed");
    }

}

hsTimerBar.addEventListener("click",highScoreHandler);
mainView.addEventListener("click",BtnHandler);
startQuiz();