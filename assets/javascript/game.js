	var alphabet = "abcdefghijklmnopqrstuvwxyz";
	var alphabetInArray = alphabet.split("");
	var winWin = 0;
	var loseLose = 0;
	var numGuesses = 9;
	var guessWrong = [];
	// Create code to randomly choose one of the letters in the alphabet (Computer) 
	var computerGuess = alphabetInArray[Math.floor(Math.random()*alphabetInArray.length)];

	document.getElementById("win").innerHTML = winWin;
	document.getElementById("loss").innerHTML = loseLose;
	document.getElementById("guess").innerHTML = numGuesses;

	// Captures Key Clicks
	document.onkeyup = function(event) {

	// Determines which exact key was selected. Make it lowercase
	var userGuess = String.fromCharCode(event.keyCode).toLowerCase();

	console.log(userGuess);
	console.log(computerGuess);

	//if the letter guess matches, you win
	if (userGuess == computerGuess) {
		winWin++;
		gamereset();
		document.getElementById("win").innerHTML = winWin;
		document.getElementById("guess").innerHTML = numGuesses;
		document.getElementById("history").innerHTML = guessWrong;
		alert("You Won! '" + userGuess + "' was my guess.");
		console.log("win " + winWin);
	}
	//if number of guesses = 1 and the next guess is wrong, you lose
	else if (userGuess != computerGuess	&& numGuesses === 1) {
		loseLose++;
		gamereset();
		document.getElementById("loss").innerHTML = loseLose;
		document.getElementById("guess").innerHTML = numGuesses;
		document.getElementById("history").innerHTML = guessWrong;
		alert("You Lost!");
		console.log("loss " + loseLose);
	}
	//if the user presses a key other than letters a-z
	else if(alphabetInArray.indexOf(userGuess) == -1) {
		alert("Please choose a letter between A-Z. Try again");
	}
	//if the user guess doesn't match, number of guesses goes down 1 and the userguess 
	//shows in the history
	else if (userGuess != computerGuess) {
		numGuesses--;
		guessWrong.push(userGuess);
		document.getElementById("history").innerHTML = guessWrong.join();
		document.getElementById("guess").innerHTML = numGuesses;
		console.log("history " + userGuess);
		console.log("guess " + numGuesses);
	}
}

function gamereset() {
	numGuesses = 9;
	guessWrong = [];
	computerGuess = alphabetInArray[Math.floor(Math.random()*alphabetInArray.length)];
}