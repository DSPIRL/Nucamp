// Global variables
const COLORS_ARRAY = ['gold', 'cyan', 'blue', 'gray', 'green', 'magenta', 'orange', 'red', 'white', 'yellow'];
let GUESSED_COLORS = [];


// Function to start game
function runGame() {
    let numTries = 0;
    let guess = '';
    let correct = false;
    const targetIndex = Math.floor(Math.random() * 10);
    const target = COLORS_ARRAY[targetIndex];
    console.log(target);

    do {
        guess = prompt('I am thinking of one of these colors:\n\n' + COLORS_ARRAY.sort().join(", ") + '\n\nWhat color am I thinking of?\n').toLowerCase();


        if (guess === null || guess === '') {
            alert('You did not provide a guess.');
            return;
        }


        numTries++;
        correct = checkGuess(guess, target);
    } while (!correct);

    alert(`Congratulations!\n\nYou have guessed the correct color! It took you ${numTries} tries (${GUESSED_COLORS.join(', ')}) to guess it.`)

}


// Check if guess is correct and return true if it is correct
function checkGuess(guess, target) {
    let correct = false;
    if (!COLORS_ARRAY.includes(guess)) {
        alert('Your color is not included in the options.');
    } else if (guess < target) {
        alert('Your guess is lower alphabetically than the color.');

    } else if (guess > target) {
        alert('Your guess is higher alphabetically than the color.');
    } else {
        correct = true;
    }

    changeColor(guess);
    GUESSED_COLORS.push(guess);
    return correct;
}


// If color is correct, this will change the background color to the guessed color
function changeColor(guess) {
    document.body.style.backgroundColor = guess;
}

function startGame() {

}


// document.querySelector('button').setAttribute( 'disabled', '');
document.getElementById('start-game');