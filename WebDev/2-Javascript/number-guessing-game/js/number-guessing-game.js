let guessString = '';
let guessNumber = 0;
let correct = false;
let numTries = 0;
let previousGuesses = [];
let alreadyGuessed = false;
let status = '';
let askForNumber = () => Number(prompt('Guess a number between 1 and 100: '));
let askForValidDataType = () => Number(prompt(`That was not a number, please enter a number between 1 and 100: `));
let askForNewNumber = (guessNumber, status) => Number(prompt(`${guessNumber} is too ${status}.\n\n \"Please\" guess another number between 1 and 100: `));


function runGame() {
	const gameNumber = generateGameNumber();
	guessString = askForNumber();

	while (!correct) {
		guessNumber = guessString;
		previousGuesses.push(guessNumber);
		if (typeof(guessString !== 'number')) {
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
        guessNumber = Number(guessString);
        numTries++;
        correct = checkGuess(guessNumber, gameNumber);
    }
}

function generateGameNumber() {
	return Math.floor(Math.random() * 100) + 1;
}

function checkGuess(guessNumber, gameNumber) {
	return (guessNumber === gameNumber);
}