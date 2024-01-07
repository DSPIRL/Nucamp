let difficultyLevel = changeDifficulty();
let currentLevel = difficultyLevel;
let winStreak = 0;
let attemptCount = 0;
const difficultyButton = document.getElementById('changeButton');
const theLeftSide = document.getElementById('leftSide');
const theRightSide = document.getElementById('rightSide');

function newGame() {
    clearGame();
    difficultyLevel = changeDifficulty();
    currentLevel = difficultyLevel;
    generateGame();
    winStreak = 0;
}

function generateGame() {
    for (let i = 0; i < currentLevel; i++) {
        let face = document.createElement('img');
        face.src = "img/new-smile.png";
        face.width = 60;
        face.className = "guessItem";
        let randomTop = Math.floor(Math.random() * 400 + 1);
        let randomLeft = Math.floor(Math.random() * 400 + 1);
        face.style.top = randomTop + 'px';
        face.style.left = randomLeft + 'px';

        theLeftSide.appendChild(face);
    }

    const leftSideImages = theLeftSide.cloneNode(true);
    leftSideImages.removeChild(leftSideImages.lastChild);

    for (let i = 0; i < leftSideImages.childNodes.length;) {
        theRightSide.appendChild(leftSideImages.firstChild);

    }

    // theRightSide.appendChild(leftSideImages);
    theLeftSide.lastChild.addEventListener("click", nextLevel);
    theLeftSide.addEventListener("click", gameOver);
}

function nextLevel(event) {
    winStreak++;

    while (theLeftSide.firstChild) {
        theLeftSide.removeChild(theLeftSide.firstChild);
    }

    while (theRightSide.firstChild) {
        theRightSide.removeChild(theRightSide.firstChild);
    }

    event.stopPropagation();
    currentLevel += difficultyLevel;
    generateGame();
}

function clearGame() {
    theLeftSide.lastChild.removeEventListener("click", nextLevel);
    theLeftSide.removeEventListener("click", gameOver);

    while (theLeftSide.firstChild) {
        theLeftSide.removeChild(theLeftSide.firstChild);
    }

    while (theRightSide.firstChild) {
        theRightSide.removeChild(theRightSide.firstChild);
    }
}

function gameOver() {
    attemptCount++;
    alert(`Game over! You had a winning streak of ${winStreak} games.`);
    winStreak = 0;
    newGame();
}

function changeDifficulty() {
    let difficulty = getDifficulty();
    let selection = 0;

    if (difficulty === 'easy') {
        selection = 3;
    } else if (difficulty === 'medium') {
        selection = 5;
    } else if (difficulty === 'hard') {
        selection = 7;
    }

    return selection;
}

function getDifficulty() {
    const difficultyDdl = document.getElementById('difficultySelector');
    return difficultyDdl.value;
}

window.addEventListener('load', generateGame);
difficultyButton.addEventListener('click', newGame);