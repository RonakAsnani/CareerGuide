var questions = [{
    question: "1. What is true about Machine Learning?",
    choices: ["Machine Learning (ML) is that field of computer science", "ML is a type of artificial intelligence that extract patterns out of raw data by using an algorithm or method.", "The main focus of ML is to allow computer systems learn from experience without being explicitly programmed or human intervention.", " All of the above"],
    correctAnswer: 3
}, {
    question: "2. ML is a field of AI consisting of learning algorithms that?",
    choices: ["Improve their performance", "At executing some task", "Over time with experience", "All of the above"],
    correctAnswer: 3
}, {
    question: "3. The action _______ of a robot arm specify to Place block A on block B.",
    choices: [" STACK(A,B)", "LIST(A,B)", "QUEUE(A,B)", "ARRAY(A,B)"],
    correctAnswer: 0
}, {
    question: "4. p → 0q is not a?",
    choices: ["hack clause", "horn clause", "structural clause", "system clause"],
    correctAnswer: 1
}, {
    question: "5.In Model based learning methods, an iterative process takes place on the ML models that are built based on various model parameters, called ?",
    choices: ["mini-batches", "optimizedparameters", "Syntax error", "superparameters"],
    correctAnswer: 2
},{
	question: "6.  A__________ begins by hypothesizing a sentence (the symbol S) and successively predicting lower level constituents until individual preterminal symbols are written.",
    choices: ["bottom-up parser", "top parser", "top-down parser", "bottom parser"],
    correctAnswer: 2
},{
	question: "7. A model of language consists of the categories which does not include ________.",
    choices: ["System unit", "structural units", "data units", "empirical units"],
    correctAnswer: 1
},{
	question: "8.Different learning methods does not include?",
    choices: ["Introduction", "Analogy", "Deduction", "Memorization"],
    correctAnswer: 0
},{
	question: "9. The model will be trained with data in one single batch is known as ?",
    choices: ["Batch learning", "Offline learning", "Both A and B", "None of these"],
    correctAnswer: 2
},{
	question: "10.Which of the following are ML methods?",
    choices: ["based on human supervision", "supervised Learning", "semi-reinforcement Learning", "All of the above"],
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