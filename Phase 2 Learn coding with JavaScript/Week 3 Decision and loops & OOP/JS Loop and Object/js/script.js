// Question 1
//      ● Write a function that prints the first 10 integers on the console starting from the number 1 using the JavaScript for loop. -->

function integer() {
    for (let i = 1; i <= 10; i++) {
        console.log(i);
     }
}
    // integer(); 


    /* Question 2
    ● writing the next 5 numbers in the console. Note: each output should be displayed on a new line. a function that takes a single number as an argument and p
         ○ Test case: If you give 7 to the function, output should look like this:
                    8
                    9
                    10
                    11
                    12 
    */

    function print(num) {
        for(let i =num+1; i<=num+5; i++){
            console.log(i);
            }
        }
    // print(7);

    function prin(num) {
        for (let i = 1; i <=5; i++) {
             console.log(num+i);
        }
    }
    // prin(10);

    /*
    Question 3
            ● Write a function that takes a single number and prints the sum of the next 10 numbers after the given number.
                 ○ Test case: If you give 7 to the function, output should be: 125 - because (8 + 9 + 10+11+ 12+ 13+ 14+ 15+ 16+ 17 = 125) -->
    */


    function addup(num1) {
        let sum=0;
        for(let i =num1 +1; i<=num1 +10; i++){
            sum  = sum+i;
            }
        console.log(sum);
     }
    // addup(7);

    /* Question 4
            ● Write a function that takes an array as an argument and prints every element of the array on the console.
                ○ Test case: given the array a = [1, "Hello", 8, 44], output should look like this:
                    1
                    Hello
                    8
                    44 
     */
        function arr(a) {
            console.log(a);
            let len = a.length;
            for (let i = 0; i < len; i++) {
                console.log(a[i]);
            }
        }
        // arr([1, "Hello", 8, 44, 22]);

         // second way
         let ar = [1, "hello", 8];
         for (let element of ar) {
            //  console.log(element.toString());
         }

         // example2
         function arr(a) {
            for (let i = 0; i<a.length; i++) {
                // console.log(a[i]);
            }
        }
        // let b = ([1, "Hello", 8, 44, 55]);
        // arr(b);

        /*
<! Question 5
    ● Write a function that takes an array as an argument and prints the total number of elements found in the array. Hint: use a property of the Array object to solve this question.
        ○ Test case 1: Given the array a = [1, "Hello", 8, 44], output should be: 4
        ○ Test case 2: Given the array a = ["world", 13], output should be: 2
*/

function length(x) {
    console.log(x.length);
}
// length([1, 8, 44]);
// length(["world", 13]);


function isDual(arr) {
    console.log(arr);
    let count = {};

    // Count the occurrences of each value in the array
    for (let i = 0; i < arr.length; i++) {
        let val = arr[i];
        console.log(count);
        count[val] = (count[val] || 0) + 1;
    }
    console.log(count);
    // Check if every value occurs exactly twice
        for (let key in count) {
        console.log(count[key]);
        if (count[key] !== 2) {
        return 0; // Not a dual array
        }
    }

    return 1; // Dual array
}
    // console.log(isDual([1, 1,2, 3, 3, 2,5]));
    // console.log(isDual([2, 5, 2, 5, 5]))


/*
Question 6
    ● Write a function that takes an array of numbers as a parameter and logs in the console the sum of all the numbers in the array.            
        ○ Test case 1: If you give this array, [5, 6, 99, 8, 76, 4, 68, 44], to the function, output should be: 310 because 5 + 6 + 99 + 8 + 76 + 4 + 68 + 44.
        ○ Test case 2: If you give this array, [3, 0], to the function, output should be: 3 because 3 + 0            
*/

function arry(y) {
    var sum = 0;
    for (let i = 0; i < y.length; i++) sum += y[i];
        // console.log(sum)
    return sum;
}

// console.log(arry([5, 6, 99, 8, 76, 4, 68, 44]));

/*
Question 7
    ● Write a function that takes an array of all numbers as a parameter, subtracts the total sum of all odd numbers of the array from the total sum of all even numbers and logs the result in the console.
        ○ Test case: If you give these array, [5, 6, 99, 8, 76, 4, 68, 44], to the function, output should be: 102
            ■ Sum of odd numbers: 5 + 99 = 104
            ■ Sum of even numbers: 6 + 8 + 76 + 4 + 68 + 44 = 206
            ■ Difference between total even and total odd numbers: 206 - 104 = 102
*/

function oddeven(x) {
    let evenSum = 0;
    let oddSum = 0;
    for (let i = 0; i < x.length; i++) {
        if (x[i] % 2 == 0) {
        evenSum += x[i];
        } else {
        oddSum += x[i];
        }
    }
    let result = evenSum - oddSum;
    console.log(result);
}
// oddeven([3, 5, 4, 8]);

/*
Question 8
    ● Write a function that takes an array as a parameter and logs in the console the elements that have even indexes only. Notice: this question is not asking you to log elements with even value, but elements that are located on even indexes).
    ○ Test case 1: If you give this array to the function [5, 6, 99, 8, 76, 4, 68, 44], toutput should be:
        5
        99
        76
        68
    ○ Test case 2: If you give this array to the function [11, “Sam”, 3, 7, “car”], output should be:
        11
        3
        ca
*/

// function evenIndex(x) {
//     for (let i = 0; i < x.length; i += 2) {
//             console.log(x[i]);
//     }
// }
//     evenIndex([11, "sam", 3, 7,"car"]);
//     evenIndex([5, 6, 99, 8, 76, 4, 68, 44]);

//     let e = [5, 6, 99, 8, 76, 4, 68, 44];
//     // console.log(e);

//     const even=[]
//     const arr = [5, 6, 99, 8, 76, 4, 68, 44];
//     for(const num of arr){
//         if ( num % 2 == 0){
//             even.push(num);
//         }
//     }
//     // console.log(even);

//     var arr = [4, 5, 7, 8, 14, 45, 76];
//         var filtered = arr.filter(function (element, index, array) {
//         return index % 2 === 0;
//         });
    
//         // console.log(arr);

/*
Questions on built in JavaScript methods
    ********************************************************************************* -->
        Questions 9 and 10 are dependent on the sampleArray provided below:
            let sampleArray = [5, 6, 99, 8, 76, 4, 68, 44]; -->
*/
/*
Question 9
    Write a function that takes the sampleArray as a parameter, removes the last element from the array, adds a new value of "32" to the array and prints the new array on the console. Hint: use an array method
 */

    // let array = [5, 6, 99, 8, 76, 4, 68, 44];

    // let p= [5, 6, 99, 8, 76, 4, 68, 44];

    // function array(pushpop) {
    //     pushpop.pop();
    //     pushpop.push(32);
    //     console.log(pushpop);
    // }

    // array(p);
    
/*
Question 10
    ● Write a function that takes the sampleArray as an argument, sorts the array in ascending order and prints the sorted array on the console
        // Use the sort method. Make sure you understand just using the sort() method alphabetically. You should use this sorting syntax - sort(function(a, b){return a-b}); -->
*/
// var order = [5, 6, 99, 8, 76, 4, 68, 44];

//                 order = order.sort();
//                 console.log(order);

//                 function Asceding(a,b) {
//                     return a-b;
//                 }
//                 console.log(order.sort());

//                 let order = [5, 6, 99, 8, 76, 4, 68, 44];
//                 let order = ["abebe", "zebede", "Sara"];
//                 function sortArray(order) {
//                 let aa = function (a, b) {
//                 return a - b;
//                 };
//                 order.sort(aa);
//                 }

//                 sortArray(order);
//                 console.log(order);
//                 let newArray = [...order].sort();
//                 console.log(newArray);
//                 console.log(newArray.reverse());

//                 console.log(order.sort().reverse());

/*
          Questions on JavaScript objects
            ******************************************************************************** -->
        <!-- The questions below ( questions 11 to 14) are based on the "evangadiClass" object provided below. let evangadiClass = {
            lengthOfCourse: "1 Month", isChallenging: false,
            topicsCovered: ["HTML", "CSS", "Media Query", "JavaScript"],
            students:  [
                            {
                                name: "Abebe",
                                age: 34,
                                sex: "M"
                                },
                            {
                                name: "Kebede",
                                age: 44,
                                sex: "M"
                            },
                            {
                                name: "Almaz",
                                age: 27,
                                sex: "F"
                            },
                            {
                                name: "Challa",
                                age: 22,
                                sex: "M"
                            },
                            {
                                name: "Chaltu",
                                age: 19,
                                sex: "F"
                            }
                        ]
                    } 
 */

/*
Question 11
    ● Change the lengthOfCourse property of the object to "5 Month" and print the new object on the console.
    ○ // Use the dot notation "." to call the property you want to change
 */

    evangadiClass.lengthOfCourse = "5 Month";
                console.log(evangadiClass);
 
/*
Question 12
    ● Add "Bootstrap" at the end of the topicsCovered property and print the new object on the console.
    ○ // Use an array method -->
*/

evangadiClass.topicsCovered.push("Bootstrap");
                console.log(evangadiClass);

/*
Question 13
    ● Write a function that takes the "evangadiClass" object as an argument and calculates the average age of the class. Print the result on the console
*/

function average(stud) {
    let sum = 0;

    for(i=0; i< stud.length; i++){
        sum = (sum + stud[i].age);
    }
    let av = sum/stud.length
    return av;
}

console.log(average(evanStu));

/*
Puzzles
    ******************************************************************************** -->
        Question 14:
            ● Write a function that takes the "evangadiClass" object as an argument and calculates the percentage of male students in the class. Print the result on the console 3/5*100=60
*/

let evanStu = evangadiClass.students;

function percentage(mf) {
    let male = evanStu.filter(function (gender) {
        return gender.sex === "M";
    });
    let female = evanStu.filter(function (gender) {
        return gender.sex === "F";
    });

    let numMale = male.length;
    let numFemale = female.length;
    let total = numMale + numFemale;
    return (numFemale / total) * 100;
}
console.log(percentage(evanStu));

/*
    Question 15:
        Test the divisors of three
       ● Write a function that takes 2 parameters: a low and high number. Your goal is to print all numbers (on the console) between low and high, and for each of these numbers print whether or not the number is divisible by 3. If the number is divisible by 3, print the word "div3" directly after the number.
 */

       function tesDiv(low, high) {
        let arr = [];
        for (i = low + 1; i < high; i++) {
            if (i % 3 === 0) {
            arr.push(i + " div3");
            } else arr.push(i);                        
        }

        return arr;
     }
     console.log(tesDiv(2, 100));
     

     function tesDiv(low,high) {
        var output = [];
        for (var i = low; i<= high; i++){
            output.push(i);
            if (i % 3 ===0 ){ output.push("div3");}
        }

        return output;
    }
        tesDiv( 2,9);