var questions = [{
    question: "1. What is a context in android ?",
    choices: ["It is an interface to store global information about an application", " It is used to create new components.", "Android has two contexts, those are getContext() and getApplicationContext()", " All of Above"],
    correctAnswer: 3
}, {
    question: "2. What is the difference between margin and padding in android layout?",
    choices: ["Margin is specifying the extra space left on all four sides in layout", "Padding is used to offset the content of a view by specific px or dp", "Both A and B are correct", "None of the above"],
    correctAnswer: 2
}, {
    question: "3. What are the return values of onStartCommand() in android services?",
    choices: ["START_STICKY", "START_NOT_STICKY", "START_REDELIVER_INTENT", "START_REDELIVER_INTENT"],
    correctAnswer: 3
}, {
    question: "4. How to access the context in android content provider?",
    choices: ["Using getContext() in onCreate()", "Using intent()", "Using getApplicationContext() at anywhere in an application", "A & C"],
    correctAnswer: 3
}, {
    question: "5. Which features are considered while creating android application?",
    choices: ["Screen Size", " Input configuration", "Platform Version", " All of above"],
    correctAnswer: 3
},{
	question: "6.How many ports are allocated for new emulator?",
    choices: ["2", "0", "10", "None"],
    correctAnswer: 0
},{
	question: "7. In which technique, we can refresh the dynamic content in android?",
    choices: ["Java", "Ajax", "Android", "None"],
    correctAnswer: 1
},{
	question: "8. What is the HTTP response error code status in android?",
    choices: ["status code < 100", " status code > 100", "status >= 400", "None"],
    correctAnswer: 2
},{
	question: "9. What is transient data in android?",
    choices: ["Permanent data", "Secure data", "Temporary data", "Logical data"],
    correctAnswer: 3
},{
	question: "10. Can a class be immutable in android?",
    choices: ["No, it can't", "Yes, Class can be immutable", "Can't make the class as final class", "None of the above"],
    correctAnswer: 1
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