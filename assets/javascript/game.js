	

// Variables to be added to, subtracted from, split, pushed to, and placed on screen and used in Functions
var wordBank = ['handball','canoeing','dressage','eventing','sailing','trampoline','racewalking','trap','skeet','badminton','judo'];
var wordToGuess = ""; 
var wordArray = [];
var blanks = [];
var tries = 15 
var losses = 0
var wins = 0
var userGuess = "";
var badGuesses = [];


// Begining of Funtions refferenced in Game - this is not where the game starts, that is below all of these functions,

var startGame = function(){

		document.onkeyup = function(event) {
			restartGame();
		}

};


var restartGame = function(){

	// Replaces the Press any key to being text, selects word, makes an array and print to screen, plus adds message - fancy!
	wordSelction();


	// This key up, the second so far, actually begins the letter guessing start of the game
	document.onkeyup = function(event) {

 	var userGuess = String.fromCharCode(event.keyCode).toLowerCase();


      // compare userGuess to wordArray if correct
      for(var i = 0; i < wordToGuess.length; i++) {
        if (userGuess === wordToGuess[i]) {
          
          	// if letter is in word, compare it to wordtoguess and add it blank array at appropriate index
          blanks.splice(i, 1, userGuess);
          
          
          // print the new blanks with the right letter to the screen
          document.querySelector('#hangman').innerHTML = blanks.join('');

        }/*end of if correct letter statement*/

        	
        	// This was my first try -wordToGuess.indexOf(userGuess)-same result
		    else if(userGuess !== wordToGuess[i]){ 

		    	// the tries counter is reduced and the user guess is pushed to the badGuesses array
		    	tries--; badGuesses.push(userGuess);

		        // this will refresh the conent on the page to show the a reduced tries number and the letter that was wrong
		        document.querySelector('.guesscounter').innerHTML = tries;
		        document.querySelector('.userguesses').innerHTML = badGuesses;

		        
		      }/*end of else if Statement for a bad guess from the user*/

			}/*end of loop*/
		      
		  }/*End of onkeyup*/

		      	// If you completed the word and win
		if (blanks.length === wordToGuess.length) {

		    wins++; document.querySelector('.wins').innerHTML = "Total Wins: " + wins;/*I wanted to restart game from here but it was going after each try*/

		    // console.log(blanks)

		}/*end of else if for WIN*/

		
		// Out of turns, loose, message and restart 
		if (tries <= 0){

			losses++;
			document.querySelector('.guesscounter').innerHTML = "Sorry Charlie you loose.";

		}/*end of if state for out of tries / lose*/


		      	 
		  
	
 
	

};/*end of restartGame*/


var wordSelction = function(){
	// pick a word from the word bank, this most import part so I can reuse the core function of the game
	wordToGuess = wordBank[Math.floor(Math.random() * wordBank.length)];
    console.log(wordToGuess);

    // change word to an array so we can turn those into blanks and switch out correct guesses to letters
    wordArray = wordToGuess.split('');
    console.log(wordArray);

    // Create underscores representing each letter in the word array
     wordArray.forEach(function() {
      blanks.push('_');
    });
     console.log(blanks);

     // replaces div on screen to underscores for each letter without cammas
     document.querySelector('#hangman').innerHTML = blanks.join('');

     document.querySelector('#message').innerHTML = "Choose Wisely My Friend";


  };/*end of wordSelection*/



var wordComplete = function(){};
var wrongLetter = function(){};
var outOfTurns = function(){};
var win = function(){};


// Call start Game begins the Game by changing the screen so the letter marks are revealed.

startGame();




