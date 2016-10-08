	var alphabet = "abcdefghijklmnopqrstuvwxyz";
	var alphabetInArray = alphabet.split("");
	var winWin = 0;
	var loseLose = 0;
	var numGuesses = 9;
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


	if (userGuess == computerGuess) {
		winWin++;
		numGuesses = 9;
		computerGuess = alphabetInArray[Math.floor(Math.random()*alphabetInArray.length)];
		document.getElementById("win").innerHTML = winWin;
		document.getElementById("guess").innerHTML = numGuesses;
		document.getElementById("history").innerHTML = null;
		console.log("win " + winWin);
	}
	else if (userGuess != computerGuess	&& numGuesses === 1) {
		loseLose++;
		numGuesses = 9;
		computerGuess = alphabetInArray[Math.floor(Math.random()*alphabetInArray.length)];
		
		document.getElementById("loss").innerHTML = loseLose;
		document.getElementById("guess").innerHTML = numGuesses;
		document.getElementById("history").innerHTML = null;
		console.log("loss " + loseLose);
	}
	else if (userGuess != computerGuess) {
		numGuesses--;
		var guessWrong = document.createTextNode(userGuess + ", "); 
		document.getElementById("history").appendChild(guessWrong);
		document.getElementById("guess").innerHTML = numGuesses;
  		
		console.log("history " + userGuess);
		console.log("guess " + numGuesses);
	}
}