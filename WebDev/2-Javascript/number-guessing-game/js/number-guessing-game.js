let guessString = '';
let guessNumber = 0;
let correct = false;
let numTries = 0;
let previousGuessesArray = [];
let alreadyGuessed = false;
let status = '';
const gameNumber = generateGameNumber();
let askForNumber = () => parseInt(prompt('Guess a number between 1 and 100: '));
let askForValidDataType = () => Number(prompt(`That was not a number, please enter a number between 1 and 100: `));
let askForNewNumber = (guessNumber, status) => Number(prompt(`${guessNumber} is too ${status}.\n\nPlease guess another number between 1 and 100: `));


function runGame() {
	guessString = askForNumber();
	guessNumber = +guessString;
	correct = checkGuess(guessNumber, gameNumber);
	do {

	} while (!correct);



	while (!correct) {
		guessNumber = +guessString;
		previousGuessesArray.push(guessNumber);
		if (typeof(guessNumber !== 'number')) {
			guessString = askForValidDataType();
		}
		else if (alreadyGuessed) {
			guessString =  askForNewNumber();
		}
		else if (guessNumber < gameNumber) {
			status = "low";
			guessString = askForNewNumber(guessNumber, status);
		}
		else if (guessNumber > gameNumber) {
			status = "high";
			guessString = askForNewNumber(guessNumber, status);
		}
        guessNumber = +guessString;
        numTries++;
        correct = checkGuess(guessNumber, gameNumber);
    }
}

function generateGameNumber() {
	return Math.floor(Math.random() * 100) + 1;
}

function checkGuess(guessNumber, gameNumber) {
	let funCorrect = false;
	if(isNaN(guessNumber)) {
		askForValidDataType();
	}
	else if ((guessNumber < 1) || (guessNumber > 100)) {
		askForNumber();
	}


	return (guessNumber === gameNumber);
}