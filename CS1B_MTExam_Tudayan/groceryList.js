/*
Manuel Federico D. Tudayan
BSCS - 1B
*/

// Ask the user if they want to create a grocery list
let createGrocery = prompt("Do you want to create a grocery list? (y/n): ");

// Execute the code below if the user chooses to create a grocery list
if (createGrocery === "y") {
  // Create an empty list that will hold the grocery list
  let groceryList = [];
  // Ask the user for the number of items to be added in the list
  let noOfItems = Number(
    prompt("Enter the number of items to be added in the grocery list: ")
  );

  // Execute the code below if the number of items is less than 10
  if (groceryList.length < noOfItems) {
    // Create a for loop to keep asking the user for items until the items in the list exceed 10
    for (let i = 0; i < noOfItems; i++) {
      let addItem = prompt(`Enter ${i + 1} item: `);
      // Add the item to the list
      groceryList.push(addItem);
    }
    alert(`Normal List [${groceryList}]`); // Normal list

    groceryList.sort();
    alert(`Sorted List [${groceryList}]`); // Sorted list alphabetically

    groceryList.reverse();
    alert(`Reversed List [${groceryList}]`); // Reversed list
  }
  // If the user chooses not to create a grocery list, display the output
} else if (createGrocery === "n") {
  alert("See you next time!");
  // If the user enters an invalid input, display the output
} else {
  alert("Invalid user input!");
}
