// // Selecting a specific element
// let abebeElement = document.getElementById("abebe");
// // console.log(abebeElement);
// console.log(abebeElement.textContent);

// // Binding an event with an element
// let kebedeElement = document.getElementById("kebede");
// kebedeElement.addEventListener("click", function () {
//   // console.log(kebedeElement);
//   console.log(kebedeElement.textContent);
// });

// // Altering a value
// let almazElement = document.getElementById("almaz");
// almazElement.addEventListener("click", function () {
//   // console.log(almazElement);
//   // console.log(almazElement.textContent);
//   almazElement.textContent = "Altered text";
// });

// // You can also take out the function on its own and give it a name
// let almazElement = document.getElementById("almaz");
// almazElement.addEventListener("click", changeAlmaz);
// function changeAlmaz() {
//   // console.log(almazElement);
//   // console.log(almazElement.textContent);
//   almazElement.textContent = "Altered text";
// }

let almazElement = document.getElementById("almaz");
let challaElement = document.getElementById("challa");
challaElement.addEventListener("click", someName);

function someName() {
  // console.log(almazElement);
  // console.log(almazElement.textContent);
  almazElement.textContent = "Altered text";
}

// Handling the addition form submission
let adderForm = document.getElementById("adder");
adderForm.onsubmit = handleAddition;
// adderForm.addEventListener("submit", handleAddition);

function handleAddition(e) {
  e.preventDefault();
  let firstValue = document.getElementsByName("first-value")[0].value;
  let secondValue = document.getElementsByName("second-value")[0].value;
  let resultHolder = document.getElementById("sum");
  let result = "";

  if (isNaN(firstValue) || isNaN(secondValue)) {
    // console.log("Please enter numerical values to do addition");
    result = "Please enter numerical values to do addition";
  } else {
    result = adder(firstValue, secondValue);
    // result = Math.pow(firstValue, secondValue);
    // console.log(result);
  }

  resultHolder.textContent = result;
}

// Adder
function adder(a, b) {
  a = Number(a);
  b = Number(b);
  return a + b;
}

// Confirmation
// Handling the Confirmation up on form submission
let confirmation = document.getElementById("userInfo");
confirmation.onsubmit = handleConfirmation;

function handleConfirmation(e) {
  e.preventDefault();

  let firstName = document.getElementsByName("first-name")[0].value;
  let lastName = document.getElementsByName("last-name")[0].value;
  let email = document.getElementsByName("email")[0].value;
  let confirmationHolder = document.getElementById("confirmation");
  let confirmationMessage = "You entered this values: <br>";

  if (firstName === "") {
    confirmationHolder.innerHTML = "First name field is required";
  } else {
    confirmationHolder.innerHTML =
      confirmationMessage +
      "First name: " +
      firstName +
      "<br>" +
      "Last name: " +
      lastName +
      "<br>" +
      "Email: " +
      email +
      "<br>";
  }
}
