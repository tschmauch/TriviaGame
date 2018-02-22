// You'll create a trivia form with multiple choice or true/false options (your choice).

// The player will have a limited amount of time to finish the quiz. 

// The game ends when the time runs out. The page will reveal the number of questions that players answer correctly and incorrectly.

// Don't let the player pick more than one answer per question.
// Don't forget to include a countdown timer.

$(document).ready(function () {
var correctAnswers = 0;
var incorrectAnswers = 0;
var unanswered = 9;
var timeLeft;
var timerId;

	// Questions
	var myQuestions = [
		{
			question: "Ulysses S. Grant appears on the front of which denomination of US. currency?",
			answers: {
				a: "$50 bill",
				b: "$100 bill",
				c: "$2 bill"
			},
			correctAnswer: "a"
		},
		{
			question: "Which fledgling network aired its first music video, titled \"Video Killed the Radio Star,\" in 1981?",
			answers: {
				a: "VH1",
				b: "ABC",
				c: "MTV"
			},
			correctAnswer: "c"
		},
		{
			question: "Which U.S. state has the longest coastline?",
			answers: {
				a: "California",
				b: "Washington",
				c: "Alaska",
			},
			correctAnswer: "c"
		},
		{
			question: "Which U.S. cities are you flying between if the airport codes on your ticket are ATL and PDX?",
			answers: {
				a: "Atlanta and Portland",
				b: "Atlanta and Phoenix",
				c: "Austin and Portland"
			},
			correctAnswer: "a"
		},
		{
			question: "What is the capital city of the U.S. state of Hawaii?",
			answers: {
				a: "Oahu",
				b: "Kona",
				c: "Honolulu",
			},
			correctAnswer: "c"
		},
		{
			question: "What is the tallest mountain in Africa?",
			answers: {
				a: "Mount Agawanda",
				b: "Mount Kilimanjaro",
				c: "Denali",
			},
			correctAnswer: "b"
		},
		{
			question: "This Scottish inventor is famous for having invented the telephone.",
			answers: {
				a: "Thomas Jefferson",
				b: "Ben Franklin",
				c: "Alexander Graham Bell"
			},
			correctAnswer: "c"
		},
		{
			question: "What kind of tree do acorns grow on?",
			answers: {
				a: "Willow",
				b: "Aspen",
				c: "Oak"
			},
			correctAnswer: "c"
		},
		{
			question: "What is the biggest size bed called?",
			answers: {
				a: "King",
				b: "Texas King",
				c: "California King"
			},
			correctAnswer: "c"
		}
	];
	// Start button
	$(document).on('click', '#start', function () {
		$('#start').hide();
		$('#timerDiv').show();
		$('#questionArea').show();
		$('#submit').show();
		// Timer
		clearTimeout(timerId);
		clearInterval(timerId);
		timeLeft = 30;
		timerId = setInterval(countdown, 1000);
		function countdown() {
			if (timeLeft === 0) {
				clearTimeout(timerId);
				displayResults();
			} else {
				$('#timer').html(timeLeft + ' seconds remaining');
				timeLeft--;
			}
		}
		countdown();

	// Populate questions
		for (var i = 0; i < myQuestions.length; i++) {
			$('#questionArea').append(myQuestions[i].question + '<br>' + '<form name="question">' + '<input type="radio" name="optiona' + i + '"/>' + myQuestions[i].answers.a + '<br/>' + '<input type="radio" name="optionb' + i + '"/>' + myQuestions[i].answers.b + '<br/>' + '<input type="radio" name="optionc' + i + '" />' + myQuestions[i].answers.c + '<br/>' + '</form>' + '<br>');
		}


	})
$(document).on('click', '#submit', function () {
	displayResults();
});

function displayResults() {
	clearTimeout(timerId);
	clearInterval(timerId);
	$('#timerDiv').hide();
	$('#submit').hide();
	$('#reset').show();
if ($("input[name='optiona0']:checked").val()) {
	correctAnswers++;
};
if ($("input[name='optionc1']:checked").val()) {
	correctAnswers++;
};
if ($("input[name='optionc2']:checked").val()) {
	correctAnswers++;
};
if ($("input[name='optiona3']:checked").val()) {
	correctAnswers++;
};
if ($("input[name='optionc4']:checked").val()) {
	correctAnswers++;
};
if ($("input[name='optionb5']:checked").val()) {
	correctAnswers++;
};
if ($("input[name='optionc6']:checked").val()) {
	correctAnswers++;
};
if ($("input[name='optionc7']:checked").val()) {
	correctAnswers++;
};
if ($("input[name='optionc8']:checked").val()) {
	correctAnswers++;
};
///////////////////
if ($("input[name='optionb0']:checked").val()) {
	incorrectAnswers++;
};
if ($("input[name='optionb1']:checked").val()) {
	incorrectAnswers++;
};
if ($("input[name='optionb2']:checked").val()) {
	incorrectAnswers++;
};
if ($("input[name='optionb3']:checked").val()) {
	incorrectAnswers++;
};
if ($("input[name='optionb4']:checked").val()) {
	incorrectAnswers++;
};
if ($("input[name='optiona5']:checked").val()) {
	incorrectAnswers++;
};
if ($("input[name='optionb6']:checked").val()) {
	incorrectAnswers++;
};
if ($("input[name='optionb7']:checked").val()) {
	incorrectAnswers++;
};
if ($("input[name='optionb8']:checked").val()) {
	incorrectAnswers++;
};
/////////////////////
if ($("input[name='optionc0']:checked").val()) {
	incorrectAnswers++;
};
if ($("input[name='optiona1']:checked").val()) {
	incorrectAnswers++;
};
if ($("input[name='optiona2']:checked").val()) {
	incorrectAnswers++;
};
if ($("input[name='optionc3']:checked").val()) {
	incorrectAnswers++;
};
if ($("input[name='optiona4']:checked").val()) {
	incorrectAnswers++;
};
if ($("input[name='optionc5']:checked").val()) {
	incorrectAnswers++;
};
if ($("input[name='optiona6']:checked").val()) {
	incorrectAnswers++;
};
if ($("input[name='optiona7']:checked").val()) {
	incorrectAnswers++;
};
if ($("input[name='optiona8']:checked").val()) {
	incorrectAnswers++;
};
unanswered = unanswered - correctAnswers - incorrectAnswers;
console.log('correct: ' + correctAnswers);
console.log('incorrect: ' + incorrectAnswers);
console.log('unanswered: ' + unanswered);
$('#questionArea').html('<h3>Correct: ' + correctAnswers + '</h3><br>' + '<h3>Incorrect: ' + incorrectAnswers + '</h3><br>' + '<h3>Unanswered: ' + unanswered + '</h3><br>');
}
// RESET
$(document).on('click', '#reset', function(){
	correctAnswers = 0;
	incorrectAnswers = 0;
	unanswered = 9;
	$('body').html('<nav class="navbar navbar-default"><div class="container-fluid"><div class="navbar-header"><div class="col-md-4">Trivia Time!</div></div></div></nav><br><br><br><div class="container"><div class="row"><div class="col-md-8 col-centered"><h1>General Trivia - Test Your Knowledge</h1><br><button type="button" class="btn btn-success btn-lg" id="start">Start</button><br><br><div class="row"><div class="col-md-2" id="timerDiv"><span id="timer"></span></div><div class="col-md-9" id="questionArea"></div></div><button type="button" class="btn btn-success btn-lg" id="submit">Submit</button><button type="button" class="btn btn-success btn-lg" id="reset">Reset</button></div></div></div></div>');
	$('#start').show();
	$('#questionArea').hide();
	$('#submit').hide();
	$('#reset').hide();
})
})
