const userInput = document.getElementById("userInput");
const countdownDisplay = document.getElementById("countdown");
const resultDisplay = document.getElementById("result");
const restartButton = document.getElementById("restart");

let randomNumber;

function startGame() {
    randomNumber = Math.floor(Math.random() * 3) + 1;
    countdownDisplay.innerHTML = "Cuenta atrás: 5 segundos";
    resultDisplay.innerHTML = "";
    let timeLeft = 5;

    const countdownPromise = new Promise((resolve) => {
        const countdown = setInterval(() => {
            countdownDisplay.innerHTML = `Cuenta atrás: ${timeLeft} segundos`;
            timeLeft--;
            if (timeLeft < 0) {
                clearInterval(countdown);
                resolve();
            }
        }, 1000);
    });

    countdownPromise.then(() => {
        evaluateResult();
    });
}

function evaluateResult() {
    const userNumber = parseInt(userInput.value);
    if (userNumber === randomNumber) {
        resultDisplay.innerHTML = `<p style='color: green; font-weight: bold;'>Enhorabuena, has salvado el mundo 👑</p><p>Tu número ${userNumber} es el mismo que el número ${randomNumber}</p>`;
    } else {
        resultDisplay.innerHTML = `<p style='color: red; font-weight: bold;'>💥 La bomba ha estallado 💥</p><p>Tu número ${userNumber} no es el número ${randomNumber}</p>`;
    }
}

userInput.onchange = startGame;
restartButton.onclick = () => location.reload();
