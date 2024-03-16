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

    


                    