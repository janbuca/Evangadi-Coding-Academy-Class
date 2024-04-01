/**** Addition *****/ 
  // adds two numbers
  // Only adds numbers and returns error if provided a non numerical value

  // // 2 solve on paper
  //   5 + 7 = 12

  // // a , b
  // a + b = c
  //   error

  // - Define a function that takes two arguments
  //   function add(a,b)
  // - Check if the given arguments are numbers
  //   - if Notification, return error message

  // if (typeof a != "number" || typeof b != "number") {
  //   return "I can only add numbers. Please provide number values";
  // }
  // - add the two numbers
  //   a + b
  // - Save the result on a variable
  //   var c = a + b
  // - Return the result
  //   return c

  // function add(a, b) {
  //   if (isNaN(a) || isNaN(b)) {
  //     return "I can only add numbers. Please provide number values";
  //   }
  //   var c = a + b;
  //   return c;
  // }

  // var sum = add(5, 7);
  // console.log(sum);


/**** Soccer points *****/ 
  //   Create a function that takes the number of wins, draws and losses and calculates the number of points a football team has obtained so far.

  //   wins get 3 points
  //   draws get 1 point
  //   losses get 0 points

  //   Examples
  //   footballPoints(3, 4, 2) ➞ 13
  //   footballPoints(5, 0, 2) ➞ 15
  //   footballPoints(0, 0, 1) ➞ 0
  //   footballPoints(16, 5, 2) ➞ 53

  //   3*3 + 4*1 + 2*0 = 13

  //   (a, b, c)

  //   3*a + b

  //   - define a function that takes 3 arguments
  //     - function footballPoints(a, b, c)
    // - check if all of the arguments are numbers
    //   if (isNaN(a) || isNaN(b) || isNaN(b) ) {
    //     return "Please provide numerical values"
    //   }
  //   - multiply the first argument by 3
  //     var winPoints = a*3
  //   - multiply the second by 1
  //     var drawPoints = b
  //   - add them together
  //     var total = winPoints + drawPoints
  //   - return the sum
  //     return total;

  // function footballPoints(a, b, c) {
  //   if (isNaN(a) || isNaN(b) || isNaN(b)) {
  //     return "Please provide numerical values";
  //   }
  //   let winPoints = a * 3;
  //   let drawPoints = b;
  //   let total = winPoints + drawPoints;
  //   return total;
  // }

  // let points = footballPoints(11, 4, 6);
  // console.log(points);

  // Pseudo code
  // Chu'lo:
  //   - I will give you win, draw and loss
  //   - Multiply the win by 3 = Win point
  //   - Multiply the draw by 1 = Draw point
  //   - Add Win points and draw points = Total points
  //   - Return this value

  //   Note: We didn't need to consider the losses because anything multiplied by zero is zero

  // function claculateFootballPoint(win, draw, loss) {
  //   const winPoint = win * 3;
  //   const drawPoint = draw * 1;
  //   const totalPoint = winPoint + drawPoint;
  //   return totalPoint;
  // }

  // // Examples
  // // footballPoints(3, 4, 2) ➞ 13
  // // footballPoints(5, 0, 2) ➞ 15
  // // footballPoints(0, 0, 1) ➞ 0

  // var calculated = claculateFootballPoint(10, 3, 22);
  // console.log(calculated);

/**** Area of a triangle *****/
  //   Write a function that takes the base and height of a triangle and return its area.
  //     - The area of a triangle is: (base * height) / 2

  //     Examples
  //       triArea(3, 2) ➞ 3
  //       triArea(7, 4) ➞ 14
  //       triArea(10, 10) ➞ 50

  //     - Check if the provided base and height values are valid numbers
  //       if (typeof base !== "number" || typeof height !== "number") {
  //         return "Please enter a number value";
  //       }

  //     - Multiply the base with the height and divide the result by 2. Then return the result
  //       var result = (base * height) / 2

  //       return

  // Pseudo code
  // Check if the provided base and height values are valid numbers
  // Multiply the base with the height and divide the result by 2. Then return the result

  // function triArea(base, height) {
  //   if (typeof base !== "number" || typeof height !== "number") {
  //     return "Please enter a number value";
  //   } else if (a < 0 || b < 0) {
  //     return "Please provide only positive numbers";
  //   } else {
  //     return (base * height) / 2;
  //   }
  // }

  // var triAreaValue = triArea(10, 10);
  // console.log(triAreaValue);

/**** Minute to second converter *****/
  //   Write a function that takes an integer minutes and converts it to seconds.

  //   Example:
  //   minuteToSecondConverter(5) ➞ 300
  //   minuteToSecondConverter(3) ➞ 180
  //   minuteToSecondConverter(2) ➞ 120

  // Solution

  // Pseudo code
  // - Declare a function called minuteToSecondConverter
  // - The function takes one argument
  // - Checks if the provided minute is a valid number greater than 0
  // - If the user enters a string return "You entered a string. Please enter a positive number"
  // // - If yes, multiply that number with 60 and return the product

  // function minuteToSecondConverter(minutes) {
  //   if (typeof minutes !== "number") {
  //     return "You entered a string. Please enter a postive number";
  //   } else if (minutes < 0) {
  //     return "You entered a negative number. Please enter a positive number";
  //   } else {
  //     return minutes * 60;
  //   }
  // }

  // var converted = minuteToSecondConverter(45);
  // console.log(converted);

  // Factorial Calculator

  // Write a function named factorialCalculator that takes in a single parameter num which will be a non-negative integer. This function
  // Write a function named factorialCalculator that calculates the factorial of a given number n.
  // A factorial of a non-negative integer n is the product of all positive integers less than or equal to n.
  // For example, the factorial of 5 is denoted by 5! =  5 × 4 × 3 ×  2 × 1 = 120.

  // Examples:
  // factorialCalculator(0) ➞ 1
  // factorialCalculator(5) ➞ 120
  // factorialCalculator(7) ➞ 5040

  const factorialCalculator = (n) => {
    let result = 1;
    for (let i = 2;   i <= n; i++) {
      result *= i;
    }
    return result;
  };

  console.log(factorialCalculator(0));
  console.log(factorialCalculator(5));
  console.log(factorialCalculator(7));


  function add(a, b) {
    if (isNaN(a) || isNaN(b)) {
      return "Please provide a number";
      
    }else{
      let c = parseInt(12) + parseInt(25);
      return c;
    }    
  }

  // console.log(add("Hello", 12));
  // console.log(add("14", "19"));
  // console.log(add("4.5", 10));


  function triArea(base, height) {
    if(isNaN(base) || isNaN(height)){
      return "Invalid input! Please enter numeric values.";
    } else if(base <= 0 ||  height <= 0){
      return "Invalid input! Both base and height must be greater than zero.";
    } else {
      return ((base*height)/2).toFixed(2);
    }
  }

  // console.log(triArea(3,7));
  // console.log(triArea("hi", "5"));
  // console.log(triArea(-3, -9));

  function footballPoints(a, b, c) {
    if(isNaN(a) || isNaN(b) || isNaN(c)){
      return "Invalid input! Please enter numeric values.";
    } else if((a < 0)||(b < 0)||(c < 0)){
      return "Invalid input! Please provide positive number.";
    } else {
        let winPoint = a *3;
        let drawPoint = b * 1;
        let losspoint = c * 0;

        let total = winPoint + drawPoint + losspoint;
        return total;

    }
  }

  // console.log(footballPoints(6, 8, 10));
  // console.log(footballPoints("Hi","8","12"));
  // console.log(footballPoints(-5, 1, 1));
  

function minuteToSecondConverter(minute) {
  if (isNaN(minute)) {
    return  'Please enter valid minutes';
  }else if(minute < 0){
    return 'Minutes cannot be negative numbers';
    
  }else{
    return minute * 60;
    }
}
// console.log(minuteToSecondConverter(45)); 
// console.log(minuteToSecondConverter('abc'));
// console.log(minuteToSecondConverter(-5));

function convertDisplay(e) {
  e.preventDefault();
  let input = document.getElementById("num").value;
  let output = document.getElementById("result");

  output.textContent = minuteToSecondConverter(input);
}
 document.getElementById("minToSec").addEventListener("submit",convertDisplay);
  

 
