/*
Manuel Federico D. Tudayan
BSCS - 1B
*/

// Create a list that will hold the user's favourite colors
let likedColors = ["Khaki", "Blue", "Black"];

// Create a while loop that will check if the colors in the list are less than 10
while (likedColors.length < 10) {
  // If the list is less than 10, ask the user to insert a color
  let userColor = prompt(
    "Enter your a color to insert inside the array (limit of 10): "
  );
  // Add the color to the list
  likedColors.push(userColor);
  console.log(likedColors);
}
// If the list is more than 10, display the output
console.log("You've exceeded the limit of 10 colors!");
