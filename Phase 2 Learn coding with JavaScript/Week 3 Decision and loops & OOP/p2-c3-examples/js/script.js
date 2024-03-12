var i;
for (i = 1; i <= 55; i++) {
  console.log("Student " + i + " raise your hand");
}
var a = 90;
console.log("Student " + a + " raise your hand");

// // If Statement
// var pass = 50;
// var score = 49;

// if (score >= pass) {
//   console.log("Hey you passed");
// }
// if (score < pass) {
//   console.log("Failed");
// }

// function checkIfPassed(pass, score) {
//   if (score >= pass) {
//     console.log("Hey you passed");
//   }
//   if (score < pass) {
//     console.log("Failed");
//   }
// }
// checkIfPassed(50, 49);

// If ... Else Statement
// // Example 1
// var pass = 50;
// var score = 72;
// if (score >= pass) {
//   console.log("Hey you passed");
// } else {
//   console.log("You failed");
// }

// function checkIfPassedIfElse(pass, score) {
//   if (score >= pass) {
//     console.log("Hey you passed");
//   } else {
//     console.log("You failed");
//   }
// }
// checkIfPassedIfElse(50, 99);

// // Example 2
// var x = 90;
// var y = 80;
// var z = 70;
// var score = 76;

// if (score >= x) {
//   alert("You got A");
// } else if (score >= y) {
//   alert("You got B");
// } else if (score >= z) {
//   alert("You got C");
// } else {
//   alert("You Failed!");
// }

// function giveGrade(score) {
//   var x = 90; // A
//   var y = 80; // B
//   var z = 70; // C
//   if (score > 100 || score < 0) {
//     console.log("Not a valid Entry");
//   } else {
//     if (score >= x) {
//       console.log("You got A");
//     } else if (score >= y) {
//       console.log("You got B");
//     } else if (score >= z) {
//       console.log("You got C");
//     } else {
//       console.log("You Failed!");
//     }
//   }
// }
// giveGrade(45);

// // Ternary Operator
// var pass = 50;
// var score = 82;
// var result = "";

// console.log(result);

// // Switch Statement
// var greetings = "";
// var timeOfDay;
// timeOfDay = "morning";

// switch (timeOfDay) {
//   case "morning":
//     greetings = "Good morning";
//     break;

//   case "afternoon":
//     greetings = "Good afternoon";
//     break;

//   case "evening":
//     greetings = "Good evening";
//     break;

//   default:
//     greetings = "Hi there";
//     break;
// }

// console.log(greetings);

// // for loop

// // Example 1
// var i;
// for (i = 1; i < 4; i++) {
//   console.log(i);
// }

// // Example 2
// var someNumbers = [7, 58, 27];
// console.log(someNumbers);
// // var lengthOfArray = 3;
// var loopNumber = 0;
// var someMessage = "";
// var i;

// for (i = 0; i < 3; i++) {
//   loopNumber = i + 1;

//   someMessage = "Loop " + loopNumber + ":" + someNumbers[i];
//   console.log(someMessage);
// }

// Example 3
// Problem solving example (From Edabit)
// Create a function that takes a number as an argument. Add up all the numbers from 1 until the number you passed to the function. For example, if the input is 4 then your function should return 10 because 1 + 2 + 3 + 4 = 10.
// - Use for loop for one
// - Think of a better way to do this

// Examples
// addUp(4) ➞ 10
// addUp(13) ➞ 91
// addUp(600) ➞ 180300

// Psudo code
// Check if the provided value is a number
// - Declare a function that takes a single argument
// - Check if the passed argument is a number
//   - If Not, return "Please pass a number"
// - Declare a variable to save the total sum. (initially 0)
// - Use for loop that starts from 1 and ends at the given number. Loop should increment by 1
// - Add the value of the var i on the total sum variable
// - Return the total sum

// function addAll(num) {
//   if (typeof num !== "number") {
//     return "Please enter a number value";
//   }
//   let sum = 0;
//   for (let i = 1; i <= num; i++) {
//     sum = sum + i;
//     // console.log(i);
//   }

//   return sum;
// }
// console.log(addAll(5));
