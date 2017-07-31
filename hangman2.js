var wordsHard = ["platypus", "superb", "xerox", "synergy", "apple", "claxon", "mellifluous", "metonymy", "adirondack", "adipose", "bulbous", "crepuscular", "hijab", "harmonious", "horticulture"];


var wordsEasy = ["cat", "dog", "cow", "pig", "goat", "snail"];
var word = "";
var answerArr =[];
var guessString = "";
var guess  = "";
var stop = false;
var turns = 0;





function pickWord(arr){
	word = arr[Math.floor(Math.random()* arr.length)];
	console.log(word);
	return (word);
	
}


function setUpAnswerArray(str){
	for (var i=0; i<str.length;i++){
	answerArr[i]= "_";
	}
	console.log(answerArr);
	return(answerArr);
}
/*_________________________________________________________________*/
//GAME LOOP


//ask for a letter
function getGuess(){
	guess = prompt("Please choose a letter or click cancel to stop playing");
	if (guess === null){
			remainingLetters = 0;
			word = "";
			answerArr =[];
			guessString = "";
			
			turns = 0;
			stop = true;
			alert("goodbye!");
			return;
		}else if (guess.length !== 1){
			console.log("Please guess a single letter!");
		}else{
	console.log (guess);
	return guess;
}
}
/*-----------------------------------------------------------------------------------------*/
//guess string shows all the letters you have guessed so far
function updateGuessString(guess){

	guessString += guess + ",";
	console.log("inside updateGuessString: " + guessString);
	return guessString;
}
/*---------------------------------------------------------------------------------------*/
//comparing guess to answerArr and filling in the answerArr
function updateGameState(guess, word, answerArr) {
	console.log("selected word is", word);
	for(var j=0; j<word.length; j++){
		if(guess === word[j]){
			answerArr[j] = guess;
		}
	}
	return answerArr;
}


/*-------------------------------------------------------------------------------------*/
function showPlayerProgress(answerArr, guessString, remainingLetters){

	turns--;
	
	for(var x=0; x<answerArr.length; x++){
		if (answerArr[x] !=="_"){
			remainingLetters = remainingLetters -1;
		}
 	}
 	if (turns ===0 && remainingLetters >0){
 		lost();
 		return;
 	}
 	else if(turns>0 && remainingLetters ===0){
 		congrats();
 		return;
 	}else {
 	alert(answerArr + " Letters you have guessed: " + guessString + " You have: " + remainingLetters + " to go and " +turns + " guesses left.");
 	return(remainingLetters);
 	}
}
/*------------------------------------------------------------------------------*/
//call either of these from within updateGameState and end game
function congrats(){
var again = prompt("you won. Do you want to play again? Enter any string into box or hit cancel to quit.");
	if (again === null){
		alert("goodbye!");
		remainingLetters = 0;
		word = "";
		answerArr =[];
		guessString = "";
		guess  = "";
		turns = 0;
		stop = true;
		return;
		
	}else{
		alert("great!");
		remainingLetters = 0;
		word = "";
		answerArr =[];
		guessString = "";
		guess  = "";
		turns = 0;
		stop = false;
		
		playGame();

		
	}

return;
}

function lost(){
var again = prompt("you lost. Do you want to play again? Enter any string into box or hit cancel to quit.");
	if (again === null){
		alert("goodbye!");
		remainingLetters = 0;
		word = "";
		answerArr =[];
		guessString = "";
		guess  = "";
		turns = 0;
		stop = true;
		return;
	}else{
		alert("great!");
		remainingLetters = 0;
		word = "";
		answerArr =[];
		guessString = "";
		guess  = "";
		turns = 0;
		stop = false;
		playGame();
		
	}
return;
}


function playGame(){
	//debugger;		
/*-----------------------------------------------------------------------*/
		pickWord(wordsHard);
		setUpAnswerArray(word);
		remainingLetters = word.length;
		turns = word.length + 5;
		
		while(remainingLetters > 0 && turns >0 && stop === false){
				//debugger;
				getGuess();
				if(guess !== null){
				updateGuessString(guess);
				updateGameState(guess, word, answerArr);
				showPlayerProgress(answerArr, guessString, remainingLetters, turns);
				}
		}

}
playGame();

