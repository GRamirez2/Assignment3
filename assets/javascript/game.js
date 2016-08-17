

// lis to words
var handball = ['h','a','n','d','b','a','l','l'];
var handballBlank = "_ _ _ _ _ _ _ _"
var canoeing = ['c','a','n','o','e','i','n','g'];
var dressage = ['d','r','e','s','s','a','g','e'];
var eventing = ['e','v','e','n','t','i','n','g'];
var sailing = ['s','a','i','l','i','n','g'];
var trampoline = ['t','r','a','m','p','o','l','i','n','e'];
var racewalking =['r','a','c','e','w','a','l','k','i','n','g'];
var handballLength = handball.length
var canoeingLength = canoeing.length
var dressageLength = dressage.length
var eventingLength = eventing.length
var sailingLength = sailing.length
var trampolineLength =trampoline.length
var racewalkingLength = racewalking.length



	

// Variables to be added to and placed on screen
var	remaining = 15;
	wins = 0;
	userGuess = "";
	correctGuess = "";
	word = "";
	wordLength = "";
	dashesH = [];
	badChoices = [];/*to be printed on screen as letter already selected*/
	dash = "";
	

		
	




document.onkeyup = function(event) {/*all JS needs to be in this tag*/

	document.querySelector("#hangman").innerHTML = handballBlank;

 var userGuess = String.fromCharCode(event.keyCode).toLowerCase(); 
 var correctIndexes = [];

	 for (var i = 0; i < handballBlank.length; i++){
		
		if(userGuess == handball[i]{
			correctIndexes.push(i);
			
			} else {
				remaining--;console.log(userGuess + " is a wrong choice," + remaining);
			}	
		}/*end of loop*/
}/*end of onkeyup function*/


			// else {
			// 		remaining--;console.log(userGuess + " is a wrong choice," + remaining);
			// 	} --code that works.
			// else if lose
			// else if win + next word or end of game
 


// // This is the end of my working code and the begining of my notes.







