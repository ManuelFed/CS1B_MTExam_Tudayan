/*
Manuel Federico D. Tudayan
BSCS - 1B
*/

console.log("Guess the favorite number");
// Create a variable that will hold the user's facourite number
theFavNumber = 5;

// Ask the user to guess the favourite number
userGuess = Number(prompt("Enter your guess: "));

/* 
Create a while loop that will check if the user's guess is:
Too High
Too Low
Correct
*/
while (userGuess !== theFavNumber) {
  if (userGuess > theFavNumber) {
    console.log("The guess is too high!");
    userGuess = Number(prompt("Enter your guess: "));
  } else if (userGuess < theFavNumber) {
    console.log("The guess is too low!");
    userGuess = Number(prompt("Enter your guess: "));
  } else if (userGuess === theFavNumber) {
    break;
  }
}
// If the guess is correct, display the output
console.log("Your guess is correct!");
