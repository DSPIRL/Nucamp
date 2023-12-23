const COLORS_ARRAY = ['gold', 'cyan', 'blue', 'gray', 'green', 'magenta', 'orange', 'red', 'white', 'yellow'];
let GUESSED_COLORS = [];

function runGame() {
    let numTries = 0;
    let guess = '';
    let correct = false;
    const targetIndex = Math.floor(Math.random() * 10);
    const target = COLORS_ARRAY[targetIndex];
    console.log(target);

    do {
        guess = prompt('I am thinking of one of these colors:\n\n' + COLORS_ARRAY.sort().join(", ") +
            '\n\nWhat color am I thinking of?\n').toLowerCase();


        if (guess === null || guess === '') {
            alert('You did not provide a guess.');
            return;
        }


        numTries++;
        correct = checkGuess(guess, target);
    } while (!correct);

    alert(`Congratulations!\n\nYou have guessed the correct color! It took you ${numTries} tries (${GUESSED_COLORS}) to guess it.`)

}

function checkGuess(guess, target) {
    let correct = false;
    if (!COLORS_ARRAY.includes(guess)) {
        alert('Your color is not included in the options.');
    } else if (guess < target) {
        changeColor(guess);
        alert('Your guess is lower alphabetically than the color.');

    } else if (guess > target) {
        changeColor(guess);
        alert('Your guess is higher alphabetically than the color.');
    } else {
        correct = true;
    }

    GUESSED_COLORS.push(guess);
    return correct;
}

function changeColor(guess) {
    document.body.style.backgroundColor = guess;
}