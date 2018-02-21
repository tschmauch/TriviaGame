// You'll create a trivia form with multiple choice or true/false options (your choice).

// The player will have a limited amount of time to finish the quiz. 

// The game ends when the time runs out. The page will reveal the number of questions that players answer correctly and incorrectly.

// Don't let the player pick more than one answer per question.
// Don't forget to include a countdown timer.

$(document).ready(function () {

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
	$('#start').on('click', function () {
		$('#start').hide();
		$('#submit').show();
		// Timer
		var timeLeft = 30;
		var timerId = setInterval(countdown, 1000);
		function countdown() {
			if (timeLeft == 0) {
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
			$('#questionArea').append(myQuestions[i].question + '<br>' + '<form name="question">' + '<input type="radio" name="option"/>' + myQuestions[i].answers.a + '<br/>' + '<input type="radio" name="option"/>' + myQuestions[i].answers.b + '<br/>' + '<input type="radio" name="option" />' + myQuestions[i].answers.c + '<br/>' + '</form>' + '<br>');
		}


	})
$('#submit').on('click', displayResults);


function displayResults() {
	console.log('Timesup');
	console.log($('input[name=option]:checked').val());
}
})
