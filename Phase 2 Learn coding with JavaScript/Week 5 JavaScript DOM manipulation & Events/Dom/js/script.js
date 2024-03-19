let firstList = document.getElementById("one");
// console.log(firstList);

// console.log(document.querySelector("#two"));
// console.log(document.querySelector(".red"));
// console.log(document.querySelectorAll("h1"));


// // Select multiple element
//// 1 is getElementByClassName() method
// let redElement = document.getElementsByClassName("red");
// console.log(redElement);
// console.log(redElement[0]); //accesing the element by index 0
// console.log(redElement.length); //how many elements are there in this class?
// console.log(redElement.item(2)); //accessing an element using item() method and passing the index as parameter


// // 2 getElementByTagName()  Method
// let tagElement = document.getElementsByTagName("h1")
// console.log(tagElement);
// console.log(tagElement.length);
// console.log(tagElement[4]);

// 3 querySelector() Method

// let queryElement = document.querySelectorAll( "h1" );
// console.log(queryElement);
// console.log(queryElement.length);
// console.log(queryElement[0]);
// console.log(document.querySelectorAll(".red"));

// console.log(document);
// // DOM node is represent everything
// console.log(document.body.childNodes);

// // DOM element represent - html element
// console.log(document.body.children);

// 1. firstChild
console.log(document.getElementById("numberList").firstChild);

// 2. lastChild
console.log(document.getElementById("numberList").lastChild);

// 3. parentElement
console.log(document.getElementById("one").parentElement);

// 4. previousElement
console.log(document.getElementById("three").previousElementSibling)

// 5. nextElement
console.log(document.getElementById("two").nextElementSibling);

// 6. nth-child
console.log(document.querySelectorAll('.red:nth-child(3)'));


// Altering values(Working with html content)

/*
JavaScript Console
    - log
    - error
    - info
    - debug
    - clear
    - time
 */
// - log
console.log("Selam Selam");
console.error("This one of the error message!");
console.info("This one of the information message!");
console.debug("This one of the debugging  message!");

// - clear
//  console.clear();
 

let startTime = performance.now();

setTimeout(() => {
    let endTime = performance.now();
    let timeTaken = (endTime - startTime) / 1000  ; // in seconds
    
    // console.timeEnd('My Timer');
    // console.log(`The Time taken is ${timeTaken} Seconds`);
}, 2000);

// console.time('My Timer');

console.time();

function time(params) {
    
}
// console.timeEnd();

console.debug("Something will be Sone error can be solved");
 console.clear();

 // 1. createElement () Method
 let liElm = document.createElement("li");
 console.log(liElm);

 // appendChild () Method
 let parent = document.getElementById("numberList");
 parent.appendChild(liElm);
 liElm.innerText = "Hi EveryOne";

 // 3. prepend () Method
 parent.prepend(liElm);

 // 4. innerHTML () Method
 liElm.innerHTML = "<i>Selam new?</i>"

//  // 5. textContent () Method
//  liElm.textContent = "<h3>Pis New</h3>"

// 6. removeChild () method
let childElement = document.getElementById("two");
parent.removeChild(childElement);

// 7. insertBefore() Method
let three = document.getElementById("three");
parent.insertBefore(liElm, three);




