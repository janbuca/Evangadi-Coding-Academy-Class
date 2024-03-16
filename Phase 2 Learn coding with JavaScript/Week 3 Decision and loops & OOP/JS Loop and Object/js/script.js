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
    print(7);
                    