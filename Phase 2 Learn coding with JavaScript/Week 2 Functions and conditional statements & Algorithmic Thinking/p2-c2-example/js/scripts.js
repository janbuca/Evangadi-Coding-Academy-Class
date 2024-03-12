// // Arithmetic operators
var a, b, c, d, e;
a = 2876;
b = 37654;
c = a + b;
d = a * b;
// // console.log(d);
e = (a + b) * (c / d);
console.log(e);

// // String Operator (Concatenation)
var a = "";
var b = " Another Text";
var c = a + b;
console.log(c);

// // Comparison Operators
var a = "A";
var b = 65;
console.log(a == b);

// ** Why is 5 less than A

// // Logical Operators
console.log(1 == 1 || 2 == 2 || 3 == 7);

// // Weak Typing
var a = 5;
var b = "T";
a = true;
console.log(a);

var c = a + b;
console.log(c);

if (1 == 1) {
  console.log("Working");
}

// // Array
// // Declaring empty array
let exampleArray = [];
// // Adding values to an Array
exampleArray = ["white", "black", "orange"];
// // Accessing array values with index
console.log(exampleArray);
console.log(exampleArray[0]);
console.log(exampleArray[1]);
console.log(exampleArray[2]);

// // Declaring/defining  a function

function onn(id) {
  console.log("We are on .. ");
  console.log("The id is " + id);
}
// // Calling/using a function
onn(345698);
// onn(564321);

// // Functions with arguments
function myFunctionNameWithArgument(a) {
  console.log(a);
}
myFunctionNameWithArgument("function with one parameter");

// // myFunctionNameWithArgument("Abebe beso bela");
function myAdditionCalculator(a, b) {
  let c;
  c = a + b;
  console.log(c);
}
myAdditionCalculator(45, 99);

// // Functions that return a value100));
function myAdditionCalculator2(a, b) {
  let c;
  c = a + b;
  var d = (a + b) / 2;
  return [c, d];
}
// // How to use it
// let a = myAdditionCalculator2(45, 99);
// console.log(a);
// // My average calculator
function myAverageCalculator(a, b) {
  var c = (a + b) / 2;
  return c;
}
var ave = myAverageCalculator(40, 60);
console.log(ave);
// // Another way of writing the same function
function myAverageCalculator2(a, b) {
  var c = myAdditionCalculator2(a, b) / 2;
  return c;
}
var ave = myAverageCalculator2(40, 60);
console.log(ave);

// Variable Scoping (var, let & const)


// if condition or statement 

function checkPassword(pass1, pass2) {
  if (pass1 === pass2) {
    console.log("The Password is Correct");    
  }else{
    console.log("The Password is Wrong");
  }
  
}

checkPassword(5, 5);
checkPassword(10, 15);

// Terminal Operator

function checkPasswordTerminal(test1, test2) {
  test1 == test2
  ? console.log("Correct password") 
  : console.log("Wrong password");
}

checkPasswordTerminal(7,  7);
checkPasswordTerminal(8,  7);

// Swish Statement 

function whattoDrink(time) {

  let drink;
  switch (time) {
    case "morning":
      console.log(drink = "Coffee!");
      break;
      
    case "afternoon":
      console.log(drink = "Tea!");
      break;
    case "night":
        console.log(drink = "Milk!");
        break;        
    default:
      console.log(drink ="water!");
  }
}

whattoDrink("morning");
whattoDrink("afternoon");
whattoDrink("night");
whattoDrink("evening");




function stud(score) {
  if (condition) {
  
      return "The Studnt Values is Invalid score"
  } else if (score >= 90) {
      return "A+";
  }else if (score >= 85) {
      return "A";
  }else if(score >= 80){
      return "A-"
  }else if (score >= 75) {
      return "B+";
  }else if(score >= 70){
      return "B";
  }else if(score >= 65){
      return "B-";
  }else if (score >= 60) {
      return "C+";
  }else if (score >= 55) {
      return "C";
  }else if (score >= 50) {
      return "D";
  }else{
      return "F";
      console.log("It is Failed blc the values is less than to '50'");
  }

  
}
     

// Functions and conditional statements - practice exercise
// Questions on functions
// ********************
  // Question 1
  // ● Define a simple function named myFirst that prints the word "Hello" on the console
  // ○ First define the function
  // ○ Then call the function

  function myFirst() {
    console.log("Hello");    
  }
  myFirst();


  // Question 2
  // ● Define a function called mySecond that takes a parameter and prints the parameter on console
  // ○ Feel free to give any value as a parameter in your function

  function mySecond(name) {
    console.log(name);    
  }
  mySecond("Janbuca Teshome");



  // Question 3
  // ● Define a function called myThird that takes a parameter and prints the parameter on the
  // console. But, it uses mySecond function to print the parameter on the console
  // ○ Call mySecond function inside of myThird function with the parameter passed from myThird function

  function myThird(x){
    mySecond(x);
  }
  myThird("I am Janbuca__tesshaw");



  // Question 4
  // ● Write a function named myFourth that takes an array as a parameter and prints only the first
  // value of the array on the console. Remember, this question is here to explain the concept of
  // function delegation in JavaScript

function myFourth(arr){
   mySecond(arr[0]);
   mySecond(arr[1]);
   mySecond(arr[2]);
}
myFourth([5,"firew",false]);



  // Question 5
  // ● Write a function named myFifth that takes an array with two numbers in it as a parameter
  // and prints the sum of the two numbers on console

  function myFifth(a, b) {
    let result = a + b; 
    console.log(result);
  } 
  myFifth(6,9);

  function myFifth(a, b) {
    return a + b;  
  } 
  console.log(myFifth(6,9));
  console.log(myFifth(20,9));
 


  // Question 6
  // ● Write a function that takes an integer minutes and converts it to seconds.
  // ○ https://edabit.com/challenge/8q54MKnRrm89pSLmW

  function convertMinToSecs(minutes) {
    const secsPerMin = 60;
    return minutes * secsPerMin;
  } 
  console.log(convertMinToSecs(1));
  console.log(convertMinToSecs(2));

  // Question 7
  //     ● Create a function that takes a number as a parameter, increments the number by +1 and returns the result -->
  //     • Write a function called "multiplyArray" that takes in three arrays: arr1, arr2, and arr3.

  function inc(num) {
    console.log("The Given Number auto Increment by one.");

    if (typeof num !== "number") {
        return "you enter the values is wrong plases changeing the values";
    } else {
        var x = num++;
        return x;
    }
 }
 var num1 = inc(15);
 console.log(num1);

//  Question 8
//    ● Write a function that takes the base and height of a triangle and returns its area
 function triArea(base,height){
    let area=0.5*base*height;
    return area;
}
console.log(triArea(10,5));

function areaTri(width, height) {
  console.log("Plase Calculate the area of the 'Triangle'")

  if ((width <= 0|| height <=0) || (typeof  width !== "number" || typeof height !== "number")) {
      return "You Entring is wrong a Number";
  }else{
      return ((width * height) / 2);
  }
}
console.log(areaTri(5, 4));


var areaRec = function (width, height){
  console.log("Plase Calculate the area of the Rectangle is")
  if ((width < 0|| height <0) || (typeof  width !== "number" || typeof height !== "number")) {
      return "You Entring is wrong a Number";
  }else{
      return ((width * height));
  }                    
}
console.log(areaRec(5, 5));

// Question 9
//    ● Create a function that returns the total number of legs of all the animals.
//     In this challenge, a farmer is asking you to tell him how many legs can be counted among all his animals.
//     The farmer breeds three species (chickens = 2 legs, cows =, 4 legs, pigs = 4 legs). Remember:
//     the farmer wants to know the total number of legs and not the total number of animals.
    function getTotalLegs() {
        var chickenlegs = 2;
        var cowlegs = 4;
        var piglegs = 4 ;
        var totallegs = chickenlegs + cowlegs + piglegs;
        
        return totallegs;
    };
    console.log(getTotalLegs());


    console.log("Calculate the total number of legs of 3  animals");
                function animalsLegs(chickens, cows, pigs) {
                    if (chickens <= 0 ||cows <=0 || chickens <=0) {
                        return "It Only Enter a postif "
                    }else if (typeof chickens !== "number" ||typeof cows !== "number" ||typeof chickens !== "number") {
                        
                    } else {
                        return ((chickens * 2) + (cows* 4) + (chickens * 4));
                    }                    
                }
                console.log(animalsLegs(2, 2, 2));


  
  // Question 10 (not from edabit.com)
  // ● Create a function that takes an array containing only TWO numbers as a parameter and returns a value that is 3 times the first element of the array.
  function arrayTwo(n) {
    return [n[0] * 3, n[1]];
}
var arr = ([5, 50]);
console.log(arrayTwo(arr));

/*
<!-- Questions on Conditional statements and - practice exercise -->

            <!-- Question 11
            ● Create a function that returns true when num1 is equal to num2; otherwise return false. -->
*/
    function compareNumbers(num1, num2){
      if (num1 == num2){
          return true;
      }else{
          return false;
      }
    }
    console.log(compareNumbers(6, 6))



    let chek = (num1, num2)=> {
      if(typeof(num1) !== "number" || typeof(num2) !== "number"){
       return "The Entring values is String plases change to a Number";
   }else if(num1 === num2){
       return "The OutPut value is 'Ture' b/c it is 'Equal'";
   }else{
       return "The output values is 'False' b/c it not 'Equal'";
   }
   return num1 === num2? true:false;
   return num1 === num2;
}
console.log(chek(5,5));
console.log(chek(5,10));
console.log(chek(5,"5"));
console.log(chek(5,"Janbuca"));
console.log(chek(-5,-5));

/*
< Question 12
            ● Create a function that takes an integer and returns true if it's divisible by 100, otherwise return false. -->

*/
    function checkTypeOf(value){
        switch(typeof(value)){
            case 'string':
                return `You entered the string "${value}"`;
            break;
            case 'boolean':
                return `You entered ${Boolean(value)}`;
            break;
            default:
                return `You enter unknown type "${typeof(value)}"`; 
        }
    }
    
    //console.log(check TypeOf("John Doe"));
    //console.log(check TypeOf(45));
    //console.log(check TypeOf(true)); 

    console.log(int(110));
                function int(a) {
                    if (a % 100 !==0) {
                        return "False!!!";                        
                    }else{
                        return "True!!!";
                    }                    
                }

  /*
  <!-- Question 13
            ● Create a function that takes a number as an argument and returns "even" for even numbers and "odd" for odd numbers -->

   */
  function chek(x,y){
      let res = [];
      res.push(`Value of x is ${x} and value of y is ${y}`);
      res.push(checkTypeOf(x));
      res.push(checkTypeOf(y))
      return res;
  };

  console.log(chek('Hello',123));

  

  console.log(evOdd(14));
                function evOdd(x) {
                    if ((x % 2) == 0) {
                        return 'The Given Number is "Even"';
                    }else{
                        return 'The Given Number is "ODD"';
                    }
                } 

