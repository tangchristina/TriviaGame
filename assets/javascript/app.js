//triviaQuestion array holds the trivia questions, possible choices, and the correct answer.
/*var triviaQuestions = [
    {
        question: "What is the world's most popular non-alcoholic drink?",
        choices: [ "Water", "Tea", "Coffee", "Soda"],
        correctAnswer: "Coffee"
    },

    {
        question: "What is the world's fastest car?",
        choices: ["Lamborghini Aventador", "Koeniggseg Agera", "Porsche 911", "Bugatti Chiron"],
        correctAnswer: "Bugatti Chiron"

    },
    {
        question: "What is the highest paying job?",
        choices: ["Software engineer", "Physician", "Chemical Engineer", "Attorney"],
        correctAnswer: "Physician"

    },
];


//initial values
var counter = 30;
var currentQuestion = 0;
var score = 0;
var losses = 0;
var timer;

//function that goes to the next question
function nextQuestion () {
//if the index of the last question is equal to the index of the current question, then we know the questions are over
    var areQuestionsDone = (triviaQuestions.length-1) === currentQuestion;
    if (areQuestionsDone) {
        console.log("game is over");
    } else {
    currentQuestion++;
    displayQuestion();
    }
}

//function that stops the timer and goes to the next question
function timesUp() {
    clearInterval(timer);
    losses++;
    //alert("Time's up! You lost. Next Question.");
    nextQuestion();
}

//function that starts the timer
function countdown() {
    counter--;
    $("#time").html("Time left: " + counter);
    if (counter===0) {
        timesUp();
    }
}




//function that displays the question
function displayQuestion() {
    counter=5;
    timer=setInterval(countdown, 1000);
    
//accesses the first question from the triviaQuestion array
    var question = triviaQuestions[currentQuestion].question;

//accesses the possible choices from the triviaQuestion array
    var choices = triviaQuestions[currentQuestion].choices;

//displays the timer
    $("#time").html("Time left: " + counter);
//displays the question
    $("#game").html("<h4>${question}</h4>${displayChoices(choices)}");



}

function displayChoices(choices) {
    let result = '';

    for (let i = 0; i < choices.length; i++) {
        result += `<p class="choice" data-answer="${choices[i]}">${choices[i]}</p>`;
    }

    return result;
}

displayQuestion();

//jquery click events

$(document).on("click", ".choice", function() {
console.log("yeeee");
});
*/

$(document).ready(function(){
    $("#start").on("click", initializeGame);

})

var trivia = {
        score=0,
        losses=0,
        currentQuestion=0,
        counter=30,
        timer,
        questions: {
           q1: "What is the world's most popular non-alcoholic drink?",
           q2: "What is the world's fastest car?",
           q3: "What is the highest paying job?"
        },
        choices: {
            c1: [ "Water", "Tea", "Coffee", "Soda"],
            c2: ["Lamborghini Aventador", "Koeniggseg Agera", "Porsche 911", "Bugatti Chiron"],
            c3: ["Software engineer", "Physician", "Chemical Engineer", "Attorney"]
        },
        correctAnswer: {
            a1: "Coffee",
            a2: "Bugatti Chiron",
            a3: "Physician"
        }

}

function initializeGame () {
    //INITIAL VALUES
    trivia.score=0;
    trivia.losses=0;
    currentQuestion=0;
    trivia.counter=5;
    trivia.timer=setInterval(countdown, 1000);
}

//function that stops the timer and goes to the next question
function timesUp() {
    clearInterval(trivia.timer);
    losses++;
    //alert("Time's up! You lost. Next Question.");
    nextQuestion();
}

//function that starts the timer
function countdown() {
    trivia.counter--;
    $("#time").html("Time left: " + trivia.counter);
    if (trivia.counter===0) {
        timesUp();
    }
}

//displays the timer
$("#time").html("Time left: " + trivia.counter);
//displays the question
$("#question").html();
//  empty last results
$('#results').html('');
// remove start button
$('#start').hide();