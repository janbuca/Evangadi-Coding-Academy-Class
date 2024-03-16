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
        arr([1, "Hello", 8, 44, 22]);

    


                    