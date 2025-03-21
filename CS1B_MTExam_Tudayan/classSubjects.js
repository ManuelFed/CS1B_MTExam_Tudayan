/*
Manuel Federico D. Tudayan
BSCS - 1B
*/

/* 
Create variables that will ask for:
The subject title, the class schedule, the classroom, name of the instructor, and the name of the student
*/
let subjectTitle = prompt("Enter the subject title: ");
let classSchedule = prompt("Enter the class schedule (Time, Days): ");
let classroom = prompt("Enter the classroom: ");
let classInstructor = prompt("Enter name of the class instructor: ");
let studentName = prompt("Enter name of the student: ");

// Console and display the variables in sentence format.
console.log(`"${studentName} is currently enrolled in ${subjectTitle} 
with a class schedule of ${classSchedule} at room ${classroom}.
The instructor for the subject is ${classInstructor}"`);
