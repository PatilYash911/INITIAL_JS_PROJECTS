let randomNo = parseInt(Math.random() * 100 + 1);

const submit = document.querySelector('#submit_button')
const inputButton = document.querySelector('#input_Area')
const guessSlot = document.querySelector('.guesses_array')
const guessRemain = document.querySelector('.guesses_remaining')
const lowOrhigh = document.querySelector('.lowOrhigh')
const startOver = document.querySelector('#ending_text')

const p = document.createElement('p')

let playGame = true
let prevGuess = []
let numofGuess = 1

if (playGame) {
    submit.addEventListener('click', function (event) {
        event.preventDefault();
        const guess = parseInt(inputButton.value);
        validateGuess(guess)
    })
}

function validateGuess(guess) {
    if (isNaN(guess)) {
        alert('Please enter a valid number')
    }
    else if (guess < 1) {
        alert('Please enter a number more than 1')
    }
    else if (guess > 100) {
        alert('Please enter a number less than 100')
    }
    else {
        prevGuess.push(guess)
        if (numofGuess == 11) {
            displayGuess(guess)
            displayMessage(`Game over , number was ${randomNo}`)
            endGame()
        }
        else {
            displayGuess(guess)
            checkGuess(guess)
        }
    }
}

function checkGuess(guess) {
    if (guess == randomNo) {
        displayMessage(`You guessed it right`)
        endGame()
    }
    else if (guess < randomNo) {
        displayMessage(`Number is too Low`)
    }
    else if (guess > randomNo) {
        displayMessage(`Number is too high`)
    }
}

function displayGuess(guess) {
    inputButton.value = '';
    guessSlot.innerHTML += `${guess},`;
    numofGuess++;
    guessRemain.innerHTML = `${11 - numofGuess}`
}

function displayMessage(message) {
    lowOrhigh.innerHTML = `<h3>${message}</h3>`;
}

function endGame() {
    inputButton.value = ''
    inputButton.setAttribute('disabled', '')
    p.classList.add('button')
    p.innerHTML = `<h2 id="newGame1">Start New Game</h2>`;
    startOver.appendChild(p);
    playGame = false;
    newGame();
}

function newGame() {
    const newGameButton = document.querySelector('#newGame1')
    newGameButton.addEventListener('click', function (e) {
        randomNo = parseInt(Math.random() * 100 + 1);
        prevGuess = []
        numofGuess = 1
        guessSlot.innerHTML = ''
        guessRemain.innerHTML = `${11 - numofGuess}`
        inputButton.removeAttribute('disabled')
        startOver.removeChild(p)
        playGame = true
    })
}