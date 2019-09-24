//triviaQuestion array holds the trivia questions, possible choices, and the correct answer.
var triviaQuestions = [
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
    $("start").hide();
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

//displays the timer
    $("#time").html("Time left: " + counter);
//displays the question
    $("#game").html("<h4>" + question + "</h4>");

}
//access the possible choices from the trivia questions array
function displayChoices() {



    for (let i = 0; i < triviaQuestions.length; i++) {
        var choiceOne = triviaQuestions[i].choices[0];
        var choiceTwo = triviaQuestions[i].choices[1];
        var choiceThree = triviaQuestions[i].choices[2];
        var choiceFour = triviaQuestions[i].choices[3];

        $("game").html("<h4>" + choiceOne + "</h4>");
        $("game").html("<h4>" + choiceTwo + "</h4>");
        $("game").html("<h4>" + choiceThree + "</h4>");
        $("game").html("<h4>" + choiceFour + "</h4>");
        console.log(choiceOne);
    }


  
}

displayQuestion();
displayChoices();

//jquery click events

$(document).on("click", ".choice", function() {
console.log("yeeee");
});