var questions = [{
    question: "1. Data Analysis is a process of?",
    choices: [" inspecting data", "cleaning data", "transforming data", "All of the above"],
    correctAnswer: 3
}, {
    question: "2. Which of the following is not a major data analysis approaches?",
    choices: [" Data Mining", "Predictive Intelligence", "Business Intelligence", "Text Analytics"],
    correctAnswer: 1
}, {
    question: "3. How many main statistical methodologies are used in data analysis?",
    choices: ["2", "3", "4", "5"],
    correctAnswer: 0
}, {
    question: "4. In descriptive statistics, data from the entire population or a sample is summarized with ?",
    choices: ["integer descriptors", "floating descriptors", "pnumerical descriptors", "decimal descriptors"],
    correctAnswer: 2
}, {
    question: "5. Data Analysis is defined by the statistician?",
    choices: ["William S.", "Hans Peter Luhn", "Gregory Piatetsky-Shapiro", " John Tukey"],
    correctAnswer: 3
},{
	question: "6.Which of the following is true about hypothesis testing?",
    choices: ["answering yes/no questions about the data", "estimating numerical characteristics of the data", "describing associations within the data", "modeling relationships within the data"],
    correctAnswer: 0
},{
	question: "7. The goal of business intelligence is to allow easy interpretation of large volumes of data to identify new opportunities.",
    choices: ["TRUE", "FALSE", "Can be true or false", "Can not say"],
    correctAnswer: 0
},{
	question: "8. The branch of statistics which deals with development of particular statistical methods is classified as",
    choices: ["industry statistics", "economic statistics", "applied statistics", "None"],
    correctAnswer: 2
},{
	question: "9.Which of the following is true about regression analysis?",
    choices: ["answering yes/no questions about the data", " estimating numerical characteristics of the data", "modeling relationships within the data", "describing associations within the data"],
    correctAnswer: 2
},{
	question: " Text Analytics, also referred to as Text Mining?",
    choices: ["TRUE", "FALSE", "Can be true or false", "Can not say"],
    correctAnswer: 0
}];


var currentQuestion = 0;
var viewingAns = 0;
var correctAnswers = 0;
var quizOver = false;
var iSelectedAnswer = [];
	var c=1800;
	var t;
$(document).ready(function () 
{
    // Display the first question
    displayCurrentQuestion();
    $(this).find(".quizMessage").hide();
    $(this).find(".preButton").attr('disabled', 'disabled');
	
	timedCount();
	
	$(this).find(".preButton").on("click", function () 
	{		
		
        if (!quizOver) 
		{
			if(currentQuestion == 0) { return false; }
	
			if(currentQuestion == 1) {
			  $(".preButton").attr('disabled', 'disabled');
			}
			
				currentQuestion--; // Since we have already displayed the first question on DOM ready
				if (currentQuestion < questions.length) 
				{
					displayCurrentQuestion();
					
				} 					
		} else {
			if(viewingAns == 3) { return false; }
			currentQuestion = 0; viewingAns = 3;
			viewResults();		
		}
    });

	
	// On clicking next, display the next question
    $(this).find(".nextButton").on("click", function () 
	{
		
        if (!quizOver) 
		{
			
            var val = $("input[type='radio']:checked").val();

            if (val == undefined) 
			{
                $(document).find(".quizMessage").text("Please select an answer");
                $(document).find(".quizMessage").show();
            } 
			else 
			{
                // TODO: Remove any message -> not sure if this is efficient to call this each time....
                $(document).find(".quizMessage").hide();
				if (val == questions[currentQuestion].correctAnswer) 
				{
					correctAnswers++;
				}
				iSelectedAnswer[currentQuestion] = val;
				
				currentQuestion++; // Since we have already displayed the first question on DOM ready
				if(currentQuestion >= 1) {
					  $('.preButton').prop("disabled", false);
				}
				if (currentQuestion < questions.length) 
				{
					displayCurrentQuestion();
					
				} 
				else 
				{
                    if(correctAnswers > 7){
                        $(document).find("#passed").text("Check your result");
						$(document).find("#passed").css({"visibility":"visible",
						"background-color":"light-grey", "color":"#0dcaf0",
						"padding":"5px","border-radius":"5px",
						"display":"flex","justify-content":"space-around",
						"margin-left":"50%"
					});
                        $(document).find(".nextButton").css("visibility","hidden");
                    }else{
                        $(document).find("#failed").text("Check your result");
						$(document).find("#failed").css({
							"visibility":"visible",
							"background-color":"light-grey", "color":"#0dcaf0",
							"padding":"5px","border-radius":"5px",
							"display":"flex","justify-content":"space-around",
							"margin-left":"50%"
						}						
						);
                        $(document).find(".nextButton").css("visibility","hidden");
                    }
					//displayScore();
					$('#iTimeShow').html('Quiz Time Completed!');
					//$('#passed').html("You scored: " + correctAnswers + " out of: " + questions.length);
					c=1850;
					//$(document).find(".preButton").text("View Answer");
				//$(document).find(".nextButton").text("");
					quizOver = true;
					return false;
					
				}
			}
					
		}	
		else 
		{ // quiz is over and clicked the next button (which now displays 'Play Again?'
			// quizOver = false; $('#iTimeShow').html('Time Remaining:'); iSelectedAnswer = [];
			// $(document).find(".nextButton").text("Next Question");
			// $(document).find(".preButton").text("Previous Question");
			//  $(".preButton").attr('disabled', 'disabled');
			// resetQuiz();
			// viewingAns = 1;
			// displayCurrentQuestion();
			// hideScore();
		}
    });
});



function timedCount()
	{
		if(c == 1850) 
		{ 
			return false; 
		}
		
		var hours = parseInt( c / 3600 ) % 24;
		var minutes = parseInt( c / 60 ) % 60;
		var seconds = c % 60;
		var result = (hours < 10 ? "0" + hours : hours) + ":" + (minutes < 10 ? "0" + minutes : minutes) + ":" + (seconds  < 10 ? "0" + seconds : seconds);            
		$('#timer').html(result);
		
		if(c == 0 )
		{
					//displayScore();
					$('#iTimeShow').html('Quiz Time Completed!');
					// $('#timer').html("You scored: " + correctAnswers + " out of: " + questions.length);
					// c=185;
					// $(document).find(".preButton").text("View Answer");
					// $(document).find(".nextButton").text("Play Again?");
					// quizOver = true;
					// return false;
                    if(correctAnswers > 7){
                        $(document).find("#passed").text("Check your p result");
                        $(document).find(".nextButton").text("");
                    }else{
                        $(document).find("#failed").text("Check your f result");
                        $(document).find(".nextButton").text("");
                    }
					
		}
		
		/*if(c == 0 )
		{	
			if (!quizOver) 
			{
				var val = $("input[type='radio']:checked").val();
            	if (val == questions[currentQuestion].correctAnswer) 
				{
					correctAnswers++;
				}
				currentQuestion++; // Since we have already displayed the first question on DOM ready
				
				if (currentQuestion < questions.length) 
				{
					displayCurrentQuestion();
					c=15;
				} 
				else 
				{
					displayScore();
					$('#timer').html('');
					c=16;
					$(document).find(".nextButton").text("Play Again?");
					quizOver = true;
					return false;
				}
			}
			else 
			{ // quiz is over and clicked the next button (which now displays 'Play Again?'
				quizOver = false;
				$(document).find(".nextButton").text("Next Question");
				resetQuiz();
				displayCurrentQuestion();
				hideScore();
			}		
		}	*/
		c = c - 1;
		t = setTimeout(function()
		{
			timedCount()
		},1000);
	}
	
	
// This displays the current question AND the choices
function displayCurrentQuestion() 
{

	if(c == 1850) { c = 1800; timedCount(); }
    //console.log("In display current Question");
    var question = questions[currentQuestion].question;
    var questionClass = $(document).find(".quizContainer > .question");
    var choiceList = $(document).find(".quizContainer > .choiceList");
    var numChoices = questions[currentQuestion].choices.length;
    // Set the questionClass text to the current question
    $(questionClass).text(question);
    // Remove all current <li> elements (if any)
    $(choiceList).find("li").remove();
    var choice;
	
	
    for (i = 0; i < numChoices; i++) 
	{
        choice = questions[currentQuestion].choices[i];
		
		if(iSelectedAnswer[currentQuestion] == i) {
			$('<li><input type="radio" class="radio-inline" checked="checked"  value=' + i + ' name="dynradio" />' +  ' ' + choice  + '</li>').appendTo(choiceList);
		} else {
			$('<li><input type="radio" class="radio-inline" value=' + i + ' name="dynradio" />' +  ' ' + choice  + '</li>').appendTo(choiceList);
		}
    }
}

function resetQuiz()
{
    currentQuestion = 0;
    correctAnswers = 0;
    hideScore();
}

// function displayScore()
// {
//     $(document).find(".quizContainer > .result").text("You scored: " + correctAnswers + " out of: " + questions.length);
//     $(document).find(".quizContainer > .result").show();
// }

function hideScore() 
{
    $(document).find(".result").hide();
}

// This displays the current question AND the choices
function viewResults() 
{

	if(currentQuestion == 10) { currentQuestion = 0;return false; }
	if(viewingAns == 1) { return false; }

	hideScore();
    var question = questions[currentQuestion].question;
    var questionClass = $(document).find(".quizContainer > .question");
    var choiceList = $(document).find(".quizContainer > .choiceList");
    var numChoices = questions[currentQuestion].choices.length;
    // Set the questionClass text to the current question
    $(questionClass).text(question);
    // Remove all current <li> elements (if any)
    $(choiceList).find("li").remove();
    var choice;
	
	
	for (i = 0; i < numChoices; i++) 
	{
        choice = questions[currentQuestion].choices[i];
		
		if(iSelectedAnswer[currentQuestion] == i) {
			if(questions[currentQuestion].correctAnswer == i) {
				$('<li style="border:2px solid green;margin-top:10px;"><input type="radio" class="radio-inline" checked="checked"  value=' + i + ' name="dynradio" />' +  ' ' + choice  + '</li>').appendTo(choiceList);
			} else {
				$('<li style="border:2px solid red;margin-top:10px;"><input type="radio" class="radio-inline" checked="checked"  value=' + i + ' name="dynradio" />' +  ' ' + choice  + '</li>').appendTo(choiceList);
			}
		} else {
			if(questions[currentQuestion].correctAnswer == i) {
				$('<li style="border:2px solid green;margin-top:10px;"><input type="radio" class="radio-inline" value=' + i + ' name="dynradio" />' +  ' ' + choice  + '</li>').appendTo(choiceList);
			} else {
				$('<li><input type="radio" class="radio-inline" value=' + i + ' name="dynradio" />' +  ' ' + choice  + '</li>').appendTo(choiceList);
			}
		}
    }
	
	currentQuestion++;
	
	setTimeout(function()
		{
			viewResults();
		},3000);
}