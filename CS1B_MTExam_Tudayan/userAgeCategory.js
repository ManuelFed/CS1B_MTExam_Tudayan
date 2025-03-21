/*
Manuel Federico D. Tudayan
BSCS - 1B
*/

// Ask for the user's age
let userAge = Number(prompt("Enter your age: "));

/*
Check for the user's age range and display the appropriate output:
Below 5: Toddler
Between 5 and 12: Child
Between 13 and 19: Teenager
Between 20 and 35: Young Adult
Between 36 and 60: Middle-Aged
Above 60: Senior
*/
if (userAge < 5) {
  console.log("You are a toddler.");
} else if (userAge >= 5 && userAge <= 12) {
  console.log("You are a child.");
} else if (userAge >= 13 && userAge <= 19) {
  console.log("You are a teenager.");
} else if (userAge >= 20 && userAge <= 35) {
  console.log("You are a young adult");
} else if (userAge >= 36 && userAge <= 60) {
  console.log("You are middle-aged.");
} else if (userAge > 60) {
  console.log("You are a senior.");
  // Display when user input is not a number
} else {
  console.log("Invalid user input!");
}
