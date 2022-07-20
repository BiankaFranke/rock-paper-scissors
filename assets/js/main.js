// JS Check
console.log('it works');

// Deklarieren
let options = ['paper', 'rock', 'scissors'];
let resultUser = 0;
let resultUserInput = document.querySelector('#resultUser');
let resultComp = 0;
let resultCompInput = document.querySelector('#resultComp');
let roundNowInput = document.querySelector("#roundNow"); 
let roundTotalInput = document.querySelector("#roundTotal");
let computerChoice = Math.round(Math.random() * 2);

let stonePaperScissors = (event) => {
    event.preventDefault();

    let roundsNow = 0;
    let roundsFive = document.querySelector("#rounds5").checked;
    let roundsTen = document.querySelector("#rounds10").checked;
    let roundsFifthteen = document.querySelector("#rounds15").checked;
    let roundsTwenty = document.querySelector("#rounds20").checked;  

    if (roundsFive == true) {
        // console.log('5 Runden');
        roundNowInput.innerText = roundsNow;
        roundTotalInput.innerText = 5;
    } else if (roundsTen == true) {
        // console.log('10 Runden');
        roundNowInput.innerText = roundsNow;
        roundTotalInput.innerText = 10;
    } else if (roundsFifthteen == true) {
        // console.log('15 Runden');
        roundNowInput.innerText = roundsNow;
        roundTotalInput.innerText = 15;
    } else if (roundsTwenty == true) {
        // console.log('20 Runden');
        roundNowInput.innerText = roundsNow;
        roundTotalInput.innerText = 20;
    } else {
        window.alert('Bitte wähle eine Anzahl aus.');
    };


    let computer = options[computerChoice];
    console.log(computer);

}

document.querySelector("#ready").addEventListener("click", stonePaperScissors);




// Reset Website

// let restart = () => {
//     location.reload(true);
// };



// // --> user selects one of the buttons --> add event listener so that it is registered when a button is pressed and which one it is 
// // --> create two arrays, one containing the user selection buttons, the other containing the computer selection options
// //--> computer selects random number 0-2 --> has to be rounded -->this number picks the object with the corresponding index in the computer selection array
// // --> if statements to determine who wins based on each scenario 
// //select rounds from radio buttons to say how many times the game can be played before the game will end and reset 
// //reset button sets everything to default and starts new game from the beginning again