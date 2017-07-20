var words = ["platypus", "superb", "xerox", "synergy", "apple", "claxon", "mellifluous", "metonymy", "adirondack", "adipose", "bulbous", "crepuscular", "hijab", "harmonious", "horticulture"];
var word = "";
var answerArr =[];
var guessString = "";
var remainingLetters= word.length;
var howMany = 0;
var turns = word.length + 10;
var guess  = "";





function pickWord(arr){
	word = words[Math.floor(Math.random()*words.length)];
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
	console.log (guess);
	console.log(typeof guess);
	return guess;
}



function turnsLeft(turns){
	turns -=1;
	console.log (turns);
	return turns;
}

//need to add turns left. Later.
function showPlayerProgress(answerArr, guessString, remainingLetters, turns){
	for(var x=0; x<answerArr.length; x++){
		if (answerArr[x]==="_"){
			remainingLetters--;
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
 	console.log(answerArr + " Letters you have guessed: " + guessString + " You have: " + remainingLetters + " to go and " +turns + " guesses left.");
 	return(remainingLetters);
 	}
}




//comparing guess to answerArr and filling in the answerArr
function updateGameState(guess, word, answerArr) {
	for(var j=0; j<word.length; j++){
		if(guess === word[j]){
			answerArr[j] = guess;
		}
	}
	return answerArr;
}


//guess string shows all the letters you have guessed so far

function updateGuessString(guess){

	guessString += guess + ",";
	console.log(guessString);
	return guessString;
}

//the game loop function
//function playGame(remainingLetters, turns, word, answerArr){
	debugger;
	pickWord(words);
	setUpAnswerArray(word);
	remainingLetters = word.length;
	console.log(remainingLetters);
	while(remainingLetters > 0 && turns >0){
			getGuess();
			updateGuessString(guess);
			updateGameState(guess, word, answerArr);
			showPlayerProgress(answerArr, guessString);
			turnsLeft();
			updateGameState();
		}
//}

//call either of these from within updateGameState and end game
function congrats(){
alert("you won");
}

function lost(){
alert("you lost");
}

/*--------------------------------------------------
pickWord(words);
setUpAnswerArray(word);
remainingLetters = word.length;
console.log(remainingLetters);
*/
//playGame(remainingLetters, turns, word, answerArr);
/*----------------------------------------------------*/
