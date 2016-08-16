

// lis to words
var handball = ['h','a','n','d','b','a','l','l'];
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
	
// my attempt at makeing dashes from the length of the word array
	makeDashes = function(){
		for (var i = 0; i < handball.length; i++){
		
			push.dashesH ("_" = (i))
			console.log(dashesH)
			/*(dashesH[i] = handball[i] )*/
		}
	}

makeDashes();

	/*dashesH[0] = '_'*/
		
	






/*/*document.onkeyup = function(event) {/*all JS needs to be in this tag*/

// 	document.querySelector("#hangman").innerHTML = handball;

//  var userGuess = String.fromCharCode(event.keyCode).toLowerCase(); 

// 	 for (var i = 0; i < handball.length; i++){
		
// 		if(userGuess == handball[i]){
// 				console.log('yes ' + userGuess + ' that letter is in the word');
// 				} else {
// 					remaining--;console.log(userGuess + " is a wrong choice," + remaining);
// 				}	
// 		}/*end of loop*/

// 			// else {
// 			// 		remaining--;console.log(userGuess + " is a wrong choice," + remaining);
// 			// 	} --code that works.
// 			// else if lose
// 			// else if win + next word or end of game
 	
// }/*end of document.onkeyup, needs to contain everthing in the JS*/

// // This is the end of my working code and the begining of my notes.







