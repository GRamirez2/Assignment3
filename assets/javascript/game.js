

// lis to words
var handball = ['h','a','n','d','b','a','l','l'];
var canoeing = ['c','a','n','o','e','i','n','g'];
var dressage = ['d','r','e','s','s','a','g','e'];
var eventing = ['e','v','e','n','t','i','n','g'];
var eightDashes = ['_', '_', '_', '_', '_', '_', '_', '_'];
var sailing = ['s','a','i','l','i','n','g'];
var sevenDashes = ['_', '_', '_', '_', '_', '_', '_'];
var trampoline = ['t','r','a','m','p','o','l','i','n','e'];
var tenDashes = ['_', '_', '_', '_', '_', '_', '_', '_', '_', '_'];
var racewalking =['r','a','c','e','w','a','l','k','i','n','g'];
var elevenDashes = ['_', '_', '_', '_', '_', '_', '_', '_', '_', '_', '_'];


	

// Variables to be added to and placed on screen
var	tries = 15;
	wins = 0;
	userGuess = "";
	correctGuess = "";
	word = "";
	wordLength = "";





document.onkeyup = function(event) {/*all JS needs to be in this tag*/

	document.querySelector("#hangman").innerHTML = elevenDashes;

 var userGuess = String.fromCharCode(event.keyCode).toLowerCase(); 

 	if(userGuess === 'h'){
 		console.log("correct");
 	}
		 else if(userGuess.indexOf(handball) == -1) {
		   
		 console.log("incorrect");
		} 
}/*end of document.onkeyup, needs to contain everthing in the JS*/

var dashes8 = function (){
	document.querySelector("#hangman").innerHTML = elevenDashes;
}

 // if (userGuess == car.letter1 char index of) {
 // 	print letter in that space and start checking for next letter

 // }	else if (userGuess !== car.letter1){
 // 	tries--,  document.querySelector(".tries").innerHTML = tries+" more attempts, and then you are eliminated from competion.";

 // }	else if (/*this can be where we jump to the next word, or when we end the game*/) {

/*I think the loop will go here based on the number of tries, then go the next set of if/else pointing to the next word.*/ 








