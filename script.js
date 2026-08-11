
function getComputerChoice() {

    // multiply Math.random by 3 to get some number between 0 to 2(include decimal portion(excluding 3))
    const randomNumber = Math.floor(Math.random() * 3); 
    // I use Math.floor because it rounds a number down to the nearest integer less than or equal to the original number
    
    if(randomNumber === 0) {
        return randomNumber + "Rock";
    } else if(randomNumber === 1){
        return randomNumber + "Paper";
    } else if(randomNumber === 2) {
        return randomNumber + "Scissors";
    } 
}

console.log(getComputerChoice());