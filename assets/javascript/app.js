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
var counter = 130;
var userAnswer = 0;
var correctAnswer = 0;
var score = 0;
var losses = 0;
var timer;

//start click event, hides the timer after clicking and displays the questions
$(document).on("click", "#start", function() {
    startTimer();
    $("#start").hide();
    displayQuestion();
}

//function that starts the timer
function startTimer() {
    counter = 100;
    timer = setInterval(countdown, 1000);
    counter--;
    $("#time").html("Time left: " + counter);
    if (counter===0) {
        timesUp();
    $("#time").empty();
    }
}
//function that stops the timer and goes to the results page
function timesUp() {
    clearInterval(timer);
    resultsPage();
}









//function thst displays the question and choices
function displayQuestion() {

        

    for (let i = 0; i < triviaQuestions.length; i++) {
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


    //clicking on the submit button tallies up your score and takes you to the results page
    $(document).on("click", "#submit-button" function() {
        timesUp();
        resultsPage();
    });
  
}




//jquery click events

function checkChoices() {
    var correctAnswer;
    var userChoice;
}