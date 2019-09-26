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
var counter = 100;
var userAnswer = 0;
var correctChoice = 0;
var score = 0;
var losses = 0;
var timer;

//start click event, hides the start button after clicking and displays the questions
$(document).on("click", "#start", function() {
    startTimer();
    $("#start").hide();
    displayQuestion();
});

//function that displays and starts the timer
function startTimer() {
    counter = 100;
    $("#time").html("Time left: " + counter);
    setInterval(countdown, 1000);
    countdown();
}

//function that counts down the timer
function countdown() {
    counter--;
    $("#time").html("Time left: " + counter);

    if (counter === 0) {
        timesUp();
    }

}

//function that stops the timer and goes to the results page
function timesUp() {
    clearInterval();
    checkChoices();
}


//function that displays the question and choices, starts the game
function displayQuestion() {

        

    for (var i = 0; i < triviaQuestions.length; i++) {
        var choiceOne = triviaQuestions[i].choices[0];
        var choiceTwo = triviaQuestions[i].choices[1];
        var choiceThree = triviaQuestions[i].choices[2];
        var choiceFour = triviaQuestions[i].choices[3];
        
        var questionBox = $("#question-box");
     
        questionBox.append("<h4>" + triviaQuestions[i].question + "</h4> <br>");

        $("#question-box").append('<div class="form-check"><input class="form-check-input" type="radio" name="radio-group'+i+'" id="radio'+i+'"><label class="form-check-label" id="radio'+i+'label" for="radio'+i+'">' + choiceOne + '</label></div> <br>');
        $("#question-box").append('<div class="form-check"><input class="form-check-input" type="radio" name="radio-group'+i+'" id="radio'+i+'"><label class="form-check-label" id="radio'+i+'label" for="radio'+i+'">' + choiceTwo + '</label></div> <br>');
        $("#question-box").append('<div class="form-check"><input class="form-check-input" type="radio" name="radio-group'+i+'" id="radio'+i+'"><label class="form-check-label" id="radio'+i+'label" for="radio'+i+'">' + choiceThree + '</label></div> <br>');
        $("#question-box").append('<div class="form-check"><input class="form-check-input" type="radio" name="radio-group'+i+'" id="radio'+i+'"><label class="form-check-label" id="radio'+i+'label" for="radio'+i+'">' + choiceFour + '</label></div> <br>');
    }

}
    //clicking on the submit button page
    $(document).on("click", "#submit-button", function() {
        timesUp();
        checkChoices();
    });
  





//function that tallies up your score and takes you to the results page

function checkChoices() {
    var correctChoice;
    var userAnswer;
    var score = 0;
    var losses = 0;

//for loop that compares the correct answer of the array with the answer the user picked
    for (var i=0; i<triviaQuestions.length; i++) {
        
        correctChoice = triviaQuestions[i].correctAnswer;
        userAnswer = $('input[id=radio'+i+']:checked + label').text();

        if (correctChoice === userAnswer) {
            score++;
        } else if (correctChoice !== userAnswer)
            losses++;
        }

resultsPage(score,losses);
console.log(score);
}

function resultsPage(score, losses) {
    $("#results-page").show();
    $("#question-box").hide();
    $("#time").hide();
    $("#correct-answers").text("Correct answers: " + score);
    $("#incorrect-answers").text("Incorrect answers: " + losses);

    

}


