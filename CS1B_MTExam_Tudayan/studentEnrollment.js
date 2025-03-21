/*
Manuel Federico D. Tudayan
BSCS - 1B
*/

// Create two empty arrays to hold students enrolled in the subject
let DSA = [];
let WebDev = [];

// Create a while loop that will ask the user to select a subject and choose from the options
while (true) {
  // Ask the user to select a subject between DSA and WebDev
  let userChoice = prompt(
    "A. DSA\nB. WebDev\nSelect the subject of choice to enroll (A/B): "
  );
  if (userChoice === "A") {
    // Ask the user to either enroll, unenroll, select another subject, or exit the program
    let userDecision = prompt(
      "A. Enroll\nB. Unenroll\nC. Select Another Subject\nD. Exit\nSelect your decision (A/B/C/D): "
    );
    // Ask the user to enter the name of a student
    if (userDecision === "A") {
      let studentName = prompt("Name of the student: ");
      // Add the student to the list
      DSA.push(studentName);
      console.log(DSA);
    } else if (userDecision === "B") {
      console.log(DSA);
      // Ask the user for a student to be unenrolled
      let studentUnenroll = prompt(
        "Name of the student to unenroll in the subject: "
      );
      // Count the index of the student to be unenrolled
      let index = DSA.indexOf(studentUnenroll);
      // Remove the student from the list
      DSA.splice(index, 1);
      console.log(DSA);
    } else if (userDecision === "C") {
      alert("Returning to subject select menu.");
      // Continue the loop from the subject select menu
      continue;
    } else if (userDecision === "D") {
      alert(
        `Exiting the program.\nEnlisted students in DSA: ${DSA}\nEnlisted students in WebDev: ${WebDev}`
      );
      // Exit the program
      break;
    }
  }
  if (userChoice === "B") {
    userDecision = prompt(
      "A. Enroll\nB. Unenroll\nC. Select Another Subject\nD. Exit\nSelect your decision (A/B/C/D): "
    );
    if (userDecision === "A") {
      let studentName = prompt("Name of the student: ");
      WebDev.push(studentName);
      console.log(WebDev);
    } else if (userDecision === "B") {
      console.log(WebDev);
      let studentUnenroll = prompt(
        "Name of the student to unenroll in the subject: "
      );
      let index = WebDev.indexOf(studentUnenroll);
      WebDev.splice(index, 1);
      console.log(WebDev);
    } else if (userDecision === "C") {
      alert("Returning to subject select menu.");
      continue;
    } else if (userDecision === "D") {
      alert(
        `Exiting the program.\nEnlisted students in DSA: ${DSA}\nEnlisted students in WebDev: ${WebDev}`
      );
      break;
    }
  }
}
