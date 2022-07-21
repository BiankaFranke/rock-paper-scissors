// JS Check
console.log('it works');

// Declaration
let roundsNow = 0;
let resultUser = 0;
let resultComp = 0;
let userChoice;
let computerChoice;
const roundsFiveNumber = 5;
const roundsTenNumber = 10;
const roundsFifthteenNumber = 15;
const roundsTwentyNumber = 20;
let options = ['paper', 'rock', 'scissor'];
let resultUserInput = document.querySelector('#resultUser');
let resultCompInput = document.querySelector('#resultComp');
let roundNowInput = document.querySelector("#roundNow"); 
let roundTotalInput = document.querySelector("#roundsTotal");
let whoWinTheRoundInput = document.querySelector("#whoWinTheRound");
const rock = document.querySelector("#btn1");
const paper = document.querySelector("#btn2");
const scissor = document.querySelector("#btn3");
// let randomChoice = Math.floor(Math.random() * 3);

// Game Rules - Who will win? -> Objects
let rules = [
    {
        choice: 'rock',
        draw: 'rock',
        beats: 'scissors'
    },
    {
        choice: 'paper',
        draw: 'paper',
        beats: 'rock'
    },
    {
        choice: 'scissors',
        draw: 'scissors',
        beats: 'paper'
    }
];

// Game Trigger
rock.addEventListener('click', () => {
    roundCheck();
    userChoice = 'rock'
    computerChoice = options[Math.floor(Math.random() * 3)];
    console.log(computerChoice);
    check(total);
});

paper.addEventListener('click', () => {
    roundCheck();
    console.log(total);
    userChoice = 'paper';
    computerChoice = options[Math.floor(Math.random() * 3)];
    console.log(computerChoice);
    check(total);
});

scissor.addEventListener('click', () => {
    roundCheck();
    userChoice = 'scissors';
    computerChoice = options[Math.floor(Math.random() * 3)];
    console.log(computerChoice);
    check(total);
});


// Check - how high is the round limit
let roundCheck = () => {
    let roundsFive = document.querySelector("#rounds5").checked;
    let roundsTen = document.querySelector("#rounds10").checked;
    let roundsFifthteen = document.querySelector("#rounds15").checked;
    let roundsTwenty = document.querySelector("#rounds20").checked;
    let roundsNow = 0;

    if (roundsFive == true) {
        total = roundsFiveNumber;
    } else if (roundsTen == true) {
        total = roundsTenNumber;
    } else if (roundsFifthteen == true) {
        total = roundsFifthteenNumber;
    } else if (roundsTwenty == true) {
        total = roundsTwentyNumber;
    } else {
        window.alert('Please choose a round limit');
    };

    roundNowInput.innerText = roundsNow;
    roundTotalInput.innerText = total;

    return {
        'total': total, 
        'roundsNow': roundsNow,
    }
};

// Check if limit is reached
let roundLimit = (roundsNow, total, resultUser, resultComp) => {
    if (roundsNow < total) {
        roundsNow +=1;
        console.log('...Next round...');
    } else {
        console.log('...Game Over...');
        winner(resultUser, resultComp);
    }
};

let winner = (resultUser, resultComp) => {
    console.log(resultUser, resultComp)
    if (resultComp < resultUser) {
        console.log('Total Winner -> User');
        document.getElementById("win").style.display = "block";
    } else if (resultComp > resultUser) {
        console.log('Total Winner -> Computer');
        document.getElementById("lose").style.display = "block";
    } else {
        console.log('Draw');
        document.getElementById("draw").style.display = "block";
    }
};

// Function to check who wins the game round, 
let check = (total) => {
    if (userChoice === computerChoice) {
        resultUserInput.innerText = resultUser;
        resultCompInput.innerText = resultComp;
        whoWinTheRoundInput.innerText = `It was a draw! You both chose ${userChoice}`;
        roundsNow += 1;
        roundNowInput.innerText = roundsNow;
        roundLimit(roundsNow, total);
    }
    if ((rules[0].choice === userChoice) && (rules[0].beats === computerChoice)){
            resultUser += 1;
            resultUserInput.innerText = resultUser;
            resultCompInput.innerText = resultComp;
            whoWinTheRoundInput.innerText = `${userChoice} (user) beats ${computerChoice} (comp). You win!`;
            roundsNow += 1;
            roundNowInput.innerText = roundsNow;
            roundLimit(roundsNow, total);
    }
    if ((rules[0].choice === computerChoice) && (rules[0].beats === userChoice
        )){
            resultComp += 1;
            resultUserInput.innerText = resultUser;
            resultCompInput.innerText = resultComp;
            whoWinTheRoundInput.innerText = `${computerChoice} (comp) beats ${userChoice} (user). You lose!`;
            roundsNow += 1;
            roundNowInput.innerText = roundsNow;
            roundLimit(roundsNow, total);
    }
    if ((rules[1].choice === userChoice) && (rules[1].beats === computerChoice)){
            resultUser +=1;
            resultUserInput.innerText = resultUser;
            resultCompInput.innerText = resultComp;
            whoWinTheRoundInput.innerText = `${userChoice} (user) beats ${computerChoice} (comp). You win!`;
            roundsNow += 1;
            roundNowInput.innerText = roundsNow;
            roundLimit(roundsNow, total);
    }
    if ((rules[1].choice === computerChoice) && (rules[1].beats === userChoice
        )){
            resultComp +=1;
            resultUserInput.innerText = resultUser;
            resultCompInput.innerText = resultComp;
            whoWinTheRoundInput.innerText = `${computerChoice} (comp) beats ${userChoice} (user). You lose!`;
            roundsNow += 1;
            roundNowInput.innerText = roundsNow;
            roundLimit(roundsNow, total);
    }
    if ((rules[2].choice === userChoice) && (rules[2].beats === computerChoice)){
            resultUser += 1;
            resultUserInput.innerText = resultUser;
            resultCompInput.innerText = resultComp;
            whoWinTheRoundInput.innerText = `${userChoice} (user) beats ${computerChoice} (comp). You win!`;
            roundsNow += 1;
            roundNowInput.innerText = roundsNow;
            roundLimit(roundsNow, total);
    }
    if ((rules[2].choice === computerChoice) && (rules[2].beats === userChoice
        )){
            resultComp += 1;
            resultUserInput.innerText = resultUser;
            resultCompInput.innerText = resultComp;
            whoWinTheRoundInput.innerText = `${computerChoice} (comp) beats ${userChoice} (user). You lose!`;
            roundsNow += 1;
            roundNowInput.innerText = roundsNow;
            roundLimit(roundsNow, total);
    }

    return {
        'resultUser': resultUser, 
        'resultComp': resultComp,
    }
};

// Reload the website
reset.addEventListener("click", () => {
    document.location.reload();
  });