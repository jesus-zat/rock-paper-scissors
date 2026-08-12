let humanScore = 0;
let computerScore = 0;

function getComputerChoice() {

    // multiply Math.random by 3 to get some number between 0 to 2(include decimal portion(excluding 3))
    const randomNumber = Math.floor(Math.random() * 3); 
    // I use Math.floor because it rounds a number down to the nearest integer less than or equal to the original number
    
    if(randomNumber === 0) {
        return "Rock";
    } else if(randomNumber === 1){
        return "Paper";
    } else if(randomNumber === 2) {
        return "Scissors";
    } 
}

function getHumanChoice() {
    return prompt("Write Rock, Paper or Scissors");
}

function playRound(humanChoice, computerChoice) {

humanChoice = humanChoice.toLowerCase();
computerChoice = computerChoice.toLowerCase();

if(humanChoice === "rock" && computerChoice === "scissors" ||
   humanChoice === "paper" &&  computerChoice === "rock" ||
   humanChoice === "scissors" && computerChoice === "paper") {

     humanScore++;

    return "You won";

} else if(humanChoice === computerChoice) {
    return "draw";
} else {
    computerScore++;
    return "You lost";
}


}

const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice();

console.log(playRound(humanSelection, computerSelection));
console.log(humanScore)

