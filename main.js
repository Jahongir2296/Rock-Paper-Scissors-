const options = document.querySelectorAll(".options");
let scorePlayer = 0;
let scoreComputer = 0;
// let resultDown = document.querySelector(".result__down")

options.forEach((option) => {
    option.addEventListener("click", function () {
        const inputPlayer = this.value;

        const comOptions =[ "Rock", "Paper",  "Scissors" ];
        const comInput = comOptions[(Math.floor(Math.random() * 3))];


        updateMoves(inputPlayer, comInput);
        compareInputs(inputPlayer, comInput);
        updateScore();
        if(checkWinner()) {
            scorePlayer = scoreComputer = 0;
            updateScore();

            document.querySelector(".result__down").innerText = compareInputs(inputPlayer, comInput);
        }
    })
})

function updateMoves(inputPlayer, comInput){
    document.querySelector(".move-player").src =`./img/${inputPlayer}.png`;
    document.querySelector(".move-computer").src =`./img/${comInput}.png`;
}
function compareInputs(inputPlayer, comInput) {
    const currentMatch = `${inputPlayer} vs ${comInput}`;
    if (inputPlayer === comInput) {
        alert(`${currentMatch} is a Tie`);
        return;
        // return `${currentMatch} is a Tie`;
    }

    if (inputPlayer === "Rock") {
        if (comInput === "Scissors") {
            alert(`${currentMatch} = You Win`);
            // return `${currentMatch} = You Win`;
            scorePlayer++;
        } else {
            alert(`${currentMatch} = Computer Wins`);
            // return `${currentMatch} = Computer Wins`;
            scoreComputer++;
        }
    }
    else if (inputPlayer === "Paper") {
        if (comInput === "Rock") {
            alert(`${currentMatch} = You Win`);
            // return `${currentMatch} = You Win`;
            scorePlayer++;
        } else {
            alert(`${currentMatch} = Computer Wins`);
            // return `${currentMatch} = Computer Wins`;
            scoreComputer++;
        }
    }
    else {
        if (comInput === "Paper") {
            alert(`${currentMatch} = You Win`);
            // return `${currentMatch} = You Win`;
            scorePlayer++;
        } else {
            alert(`${currentMatch} = Computer Wins`);
            // return `${currentMatch} = Computer Wins`;
            scoreComputer++;
        }
    }
}
function updateScore() {
    document.querySelector("#score-player").textContent = scorePlayer;
    document.querySelector("#score-computer").textContent = scoreComputer;

}
function checkWinner() {
    if (scorePlayer === 5 || scoreComputer === 5) {
        const winner =
            scorePlayer === 5
                ? "You win the game! Congratulations!"
                : "Computer wins the game! Try again next time!";
        alert(winner);
        return true;
    }
    return false;
}
// console.log(  compare( userChooseCharacter, computerPlay[1].name))

// document.querySelector(".result__down").textContent  = compareInputs(inputPlayer, comInput)