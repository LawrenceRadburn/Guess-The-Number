const button1 = document.getElementById("btn-1")
const button2 = document.getElementById("btn-2")
const button3 = document.getElementById("btn-3")
const hiddenNumber = document.getElementById("hidden-number");
let displayScore = document.getElementById("display-score");
displayScore.innerText = `Current Score: ${0}`;
let score = 0;
console.log(`Your current score is ${score}`);
let guess = "";
let randomNumber = "";


function getRandomNumber() {
    randomNumber = Math.floor(Math.random() * 3) + 1;
    console.log(`The automatically generated number is ${randomNumber}`);
}

getRandomNumber();


hiddenNumber.addEventListener("click", () => {
    getRandomNumber();
})


// Appropriate buttons with numbers

button1.addEventListener("click", () => {
    guess = 1;
    console.log(`Your guess is ${guess}.`);
    ifNumberMatchOrMismatch();
    getRandomNumber();
});

button2.addEventListener("click", () => {
    guess = 2;
    console.log(`Your guess is ${guess}.`);
    ifNumberMatchOrMismatch();
    getRandomNumber();
});

button3.addEventListener("click", () => {
    guess = 3;
    console.log(`Your guess is ${guess}.`);
    ifNumberMatchOrMismatch();
    getRandomNumber();
});




// Game Logic

function createFloatingTextCorrect(message) {
    const floatingText = document.createElement('div');
    floatingText.classList.add('floating-text-correct');
    floatingText.innerText = message;

    const scoreSection = document.querySelector('.score');
    scoreSection.appendChild(floatingText);

    setTimeout(() => {
        floatingText.remove();
    }, 2000);
}

function createFloatingTextIncorrect(message) {
    const floatingText = document.createElement('div');
    floatingText.classList.add('floating-text-incorrect');
    floatingText.innerText = message;

    const scoreSection = document.querySelector('.score');
    scoreSection.appendChild(floatingText);

    setTimeout(() => {
        floatingText.remove();
    }, 2000);
}

function ifNumberMatchOrMismatch() {
    if (guess === randomNumber) {
        hiddenNumber.innerText = `Hidden number was: ${randomNumber}`;
        console.log("You guess correctly. You score increased by 1.");
        score++;
        createFloatingTextCorrect("+1 - Correct");
        console.log(score);
        displayScore.innerText = `Current Score: ${score}`;
        displayScore.classList.add('pulse-correct');
        console.log("The scoreboard shines green");

        setTimeout(() => {
            displayScore.classList.remove('pulse-correct');
            hiddenNumber.innerText = "Hidden Number";
        }, 2000);
        
    } else if (guess !== randomNumber && score <= 0) {
        hiddenNumber.innerText = `Hidden number was: ${randomNumber}`;
        console.log("You guess incorrectly. However, your score cannot be reduced lower than 0");
        createFloatingTextIncorrect("-0 - Inorrect");
        console.log(`Your score is now ${score}.`);
        displayScore.innerText = `Current Score: ${score}`;
        displayScore.classList.add('pulse-incorrect');
        console.log("The scoreboard shines red");

        setTimeout(() => {
            displayScore.classList.remove('pulse-incorrect');
            hiddenNumber.innerText = "Hidden Number";
        }, 2000);

    } else {
        hiddenNumber.innerText = `Hidden number was: ${randomNumber}`;
        console.log("You guess incorrectly. Your score has been reduced by 1");
        score--;
        createFloatingTextIncorrect("-1 - Incorrect");
        console.log(`Your score is now ${score}.`);
        displayScore.innerText = `Current Score: ${score}`;
        displayScore.classList.add('pulse-incorrect');
        console.log("The scoreboard shines red");

        setTimeout(() => {
            displayScore.classList.remove('pulse-incorrect');
            hiddenNumber.innerText = "Hidden Number";
        }, 2000);
    }

}