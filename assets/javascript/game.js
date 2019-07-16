alert("test")
// GLOBAL VARIALBES************************************************************************
var wordChoices = ["a", "b", "c", "d", "e", "f", "g", "h", "i", 
                    "j","k", "l", "m", "n", "o", "p", "q", "r", 
                    "s", "t","u", "v", "w", "x", "y", "z"]
var selectedLetter = " ";
var wrongLetters = [];

// Counters
var winCount = 0;
var lossCount = 0;
var guessesLeft = 9;

// FUNCTIONS (Reusable blocks of code that i will come upon when needed)*******************
function startGame() {
    selectedLetter = wordChoices[Math.floor(Math.random() * wordChoices.length)];

    //Reset
    guessesLeft = 9;

    // Change HTML to reflect round conditions
    document.getElementById("winSection").innerHTML = winCount;
    document.getElementById("lossSection").innerHTML = lossCount;
    document.getElementById("numGuesses").innerHTML = guessesLeft;
    

    //Testing / Debugging
    console.log(selectedLetter);
}

function checkletters(letter) {
    // check if letter was selected

    var isLetterChoosen = false;

    for (var i=0; i<selectedLetter.length; i++){
        if (selectedLetter[i] == letter) {
            isLetterChoosen = true;
            winCount++
            alert("Wins: " + winCount);
        }
        
        else {
            wrongLetters++
            guessesLeft--
            alert("Wrong Letter " + wrongLetters);
            alert("guessesLeft " + guessesLeft);
        }
    }



}

// MAIN PROCESS ***************************************************************************


// Initiate the code the first time
startGame();

// Register keyclicks

document.onkeyup = function(event) {
    var letterGuessed = String.fromCharCode(event.keyCode).toLowerCase();
    checkletters(letterGuessed);

    //Testing / Debugging
    console.log(letterGuessed);
}

