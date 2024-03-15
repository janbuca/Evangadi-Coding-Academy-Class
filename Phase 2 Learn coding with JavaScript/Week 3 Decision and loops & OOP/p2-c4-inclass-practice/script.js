// Question 1
// Create a function that takes the number of wins, draws and losses and calculates the number of points a football team has obtained so far.

// wins get 3 points
// draws get 1 point
// losses get 0 points

// win*3 = win point
// draw*1 = draw point
// 2*0 = 0 = You can ignore this
// Total = win point + draw point

// Pseudo code
// Chu'lo:
//   - I will give you win, draw and loss
//   - Multiply the win by 3 = Win point
//   - Multiply the draw by 1 = Draw point
//   - Add Win points and draw points = Total points
//   - Return this value

// Examples
// footballPoints(3, 4, 2) ➞ 13
// footballPoints(5, 0, 2) ➞ 15
// footballPoints(0, 0, 1) ➞ 0

function calculateFootballPoints(win, draw, loss) {
  let winPoints = win * 3;
  let drawPoints = draw * 1;
  let totalPoints = winPoints + drawPoints;
  // console.log(totalPoints);
  return totalPoints;
}

// let result = calculateFootballPoints(1870, 340, 190);
// console.log(result);

// Understand the problem
// Solve it on your own
// Convert to a general solution
// Write the pseudo code
// Translate to JavaScript
// Test

// Question 2:
// Write a function that takes the base and height of a triangle and return its area.
//   - The area of a triangle is: (base * height) / 2

//   Examples
//     triArea(3, 2) ➞ 3
//     triArea(7, 4) ➞ 14
//     triArea(10, 10) ➞ 50

// Pseudo code
// - I will give you base and height
// Check if the provided base and height values are valid numbers
// Multiply the base with the height and divide the result by 2. Then return the result

function triArea(base, height) {
  if (typeof base !== "number" || typeof height !== "number") {
    return "Please enter a number value";
  } else if (base <= 0 || height != 0) {
    return "Please enter a positive number";
  } else {
    return (base * height) / 2;
  }
}

// console.log(typeof true);
// var triAreaValue = triArea(10, 10);
// console.log(triAreaValue);

// Understand the problem
// Solve it on your own
// Convert to a general solution
// Write the pseudo code
// Translate to JavaScript
// Test

// Question 3:
//   Create a function that takes a number as an argument. Add up all the numbers from 1 until the number you passed to the function. For example, if the input is 4 then your function should return 10 because 1 + 2 + 3 + 4 = 10.
//   // - Use for loop for one
//   // - Think of a better way to do this

// n = n + (n-1) + (n-2) ---- until 1

// initial = 1
// condition <= n
// i++

// Examples
// addUp(4) ➞ 10
// addUp(13) ➞ 91
// addUp(600) ➞ 180300

// Pseudo code
// Skip the checking part to focus on the logic

// - Declare a function that takes a single argument
// - Check if the passed argument is a number
//   - If Not, return "Please pass a number"
// - Declare a variable to save the total sum. (initially 0)
// - Use for loop that starts from 1 and ends at the given number. Loop should increment by 1
// - Add the value of the var i on the total sum variable
// - Return the total sum

// Method 1
function addUp1(num) {
  if (typeof num !== "number") {
    return "Please enter a number value";
  }
  if (num <= 0) {
    return "Please enter a positive number";
  }
  let sum = 0;
  for (let i = 1; i <= num; i++) {
    sum = sum + i;
    // console.log(i);
  }
  return sum;
}
// console.log(addUp1(600));

// Method 2
function addUp2(num) {
  return (num * (num + 1)) / 2;
}
// console.log(addUp2(600));

// An array with an odd number of elements is said to be "centered" if all elements (except the middle one) are strictly greater than the value of the middle element. Note that only arrays with an odd number of elements have a middle element. Write a function that accepts an integer array and returns 1 if it is a centered array, otherwise it returns 0.

// Examples:
// if the input array is {1, 2, 3, 4, 5}
// return 0
// (the middle element 3 is not strictly less than all other elements)

// if the input array is { 3, 2, 1, 4, 5}
// return 1
// (the middle element 1 is strictly less than all other elements)

// if the input array is {3, 2, 1, 4, 1}
// return 0
// (the middle element 1 is not strictly less than all other elements)

// if the input array is {1, 2, 3, 4}
// return 0
// (no middle element)

// if the input array is {}
// return 0
// (no middle element)

// if the input array is {10}
// return 1
// (the middle element 10 is strictly less than all other elements)

// // Pseudo code
// - First check if the given array is null, or the length os divisible by 2. If that is the case return 0
// - Else
// - Identify the middle item
    // - To identify the middle item, we need the index of the center item
//   - To get the index of the middle item, we can divide the length of the array by 2 and round that to the floor
// - Save the value of the middle item on a variable using the index
// - Then loop through every item of the array and compare it with the middle value (except itself)
// - If you can find a single value that is less than or equal to the center value, then return 0
// - If none is found return 1

// function checkMiddle(a) {
//   if (a == null || a.length % 2 == 0) {
//     return 0;
//   }
//   let midIndex = (a.length - 1) / 2;
//   let middleItem = a[midIndex];
//   for (var i = 0; i < a.length; i++) {
//     if (i != midIndex) {
//       if(middleItem >= a[i]){
//         return 0;
//       }
//     }
//   }
//   return 1;
// }
// a = [2, 3, 1, 4, 7];
// console.log(checkMiddle(a));


let myFiatCar = {
  name : "Fiat",
  model : 500,
  weight : "850kg",
  color : "white",

  start:function() {
    return "Start my" + this.name;    
  },

  drive: function() {
    return "Go forward" + this.name;    
  },

  stop: function () {
    return "Stop" + this.name;    
  }  
}

console.log(myFiatCar);
console.log(myFiatCar.name);
console.log(myFiatCar["model"]);
console.log(myFiatCar.weight);
console.log(myFiatCar["color"]);
console.log(myFiatCar.start());
console.log(myFiatCar.drive());
console.log(myFiatCar.stop());


myFiatCar.name = "Toyota";
console.log(myFiatCar.name);

myFiatCar.mileage = 4000;
console.log(myFiatCar.mileage);

