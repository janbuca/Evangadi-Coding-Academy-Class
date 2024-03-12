$( document ).ready(function() {

	// Basic selectors 

	// // // Selecting an individual element 
	// 	// Using JavaScript 
	// 		var el = document.getElementById("four");
	// 		console.log(el);

	// 	// Using jQuery 
	// 		var el = $("#four");
	// 		console.log(el);

	// // Selecting multiple elements
	// 	// // Using JavaScript
	// 		var el = document.getElementsByClassName("yellow");
	// 		console.log(el);

	// 	// Using jQuery 
	// 		var el = $(".yellow");
	// 		console.log(el[0]);		

	// 	// // Using JavaScript
	// 		var el = document.getElementsByTagName("li");
	// 		console.log(el);

	// 	// Using jQuery 
	// 		var el = $("li");
	// 		console.log(el);



	// Filters

		// var el = $("li");
		// console.log(el);

		// First Element :first
		// var el = $("li:first");
		// console.log(el);

		// Nth element :nth-child()
		// var el = $("li:nth-child(4)");
		// console.log(el);

		// // // All even element 
		// var el = $("li:even");
		// console.log(el);

		// var el = $("li:odd");
		// console.log(el);

		// $("li:even").css("background-color", "pink");
		// $("li:odd").css("background-color", "blue");

		// // Focus  
		// $("input:first").focus(); 

		// var el = $("input:focus");
		// console.log(el);

  		// $(":focus").css("background-color", "pink"); 

  	// Content filters
  		// :has(selector)
		// var el = $("ul:has(.yellow)");
		// console.log(el);

		// // // :contains("text")
		// var el = $("ul:contains(Apple)");
		// console.log(el);

	// 	// // empty
	// 	var el = $("li:empty");
	// 	console.log(el);
	// 	el.hide();

	// // Visibility 
	// 	var el = $("li:hidden");
	// 	console.log(el);

	// 	el.show();


	// Performing Tasks 

	// Content
		// // // html() 
		// // // Used to get the HTML content of the selected element 
		// var el = $("#listOfFruits").html();
		// console.log(el);
		// $("#one").html("<p>Addis Value</p>");
		// // // // text() 
		// // // // Used to get the text content of the selected element 
		// var el = $("#listOfFruits").text();
		// console.log(el);
		// $("#one").html("<p>Text change</p>");

		// // // // html() 
		// // // // Used to get the html content of the selected element 
		// var el = $("#listOfFruits").html();
		// console.log(el);

		// // // // text() 
		// // // // Used to get the text content of the selected element 
		// var el = $("#listOfFruits").text();
		// console.log(el);

		// // // remove
		// var el = $("li:empty");
		// el.hide();
		// el.remove();

	// Elements

		// // // before()
		// // // Inserts item before the selected item 
		// var el = $("li:empty");
		// el.before('<li> Before Empty Item </li>');

		// // // // after()
		// // // // Inserts item after the selected item 		
		// var el = $("li:empty");
		// el.after('<li> Empty Item Above </li>');	

		// // // prepend() 
		// // // // Inserts item in the begining of the selected item 	
		// var el = $("#listOfFruits");
		// el.prepend("<li class='green'> Added using the prepend method </li>");			
			
		// // // // append() 
		// // // // Inserts item at the end of the selected item 	
		// var el = $("#listOfFruits");
		// el.append("<li class='green'> Added using the append method </li>");		

		// // // // What happens here? 
		// var el = $("#five");
		// el.append("<p class='green'> Added using the append method </p>");	


	// Attributes
		// // addClass() & next()
		// // Used to add a class(es) to a selected item 
		// var el = $("li:empty");
		// // el.addClass("green");

		// el.after("<li class=''> Empty Item Below </li>").next().addClass("green");		

		// // What happens if you do this 
		// var el = $("li:empty");
		// el.after('<li> Empty Item Above </li>').addClass("green");	

		// // css()
		// Is used to get or set the css property of a selected element 
		// $("#one").css({"background-color": "black", "color": "#fff"});
		// $("li").css("border", "4px solid pink");

	// Form value 
		// // // val()
		// var el = $("input:first");
		// console.log(el);
		// el.val("Some value");
		// // el.val();

	// Finding elements 
		// // find() 
		// // Is used to find elements that are decendents of the selected item 
		// var el = $("#listOfFruits").find('li.red').css( "background-color", "pink" );

		// // What happens if you do this 
		// var el = $("#five").find('li').css( "background-color", "pink" );

	// Looping through elements
		// JavaScript way   
		// var el = document.getElementsByTagName("li");
		// console.log(el);
		// // // For loop in action 
		// for (var i = 0; i < el.length; i++) {
		// 	var selectedItem = el[i];
		// 	selectedItem.style.backgroundColor = "purple";
		// 	console.log(selectedItem);
		// }

		// jQuery way 
		// var el = $("li").css( "background-color", "pink" );


	// Event handling 

		// // Change background on click 
		// 	// Javascript way
		// 	var el = document.getElementById('change-bg1');
		// 	el.onclick = changeBackground; 

		// 	// // jQuery way using the on()
		// 	// // on() attaches the event handler function for one or more events to the selcted item 
		// 	$("#change-bg1").on("click", changeBackground);

		// 	// // // jQuery way using the click()
		// 	$("#change-bg1").click(changeBackground);
		// 	$("#change-bg1").mouseover(changeBackground); 
		// 	$( "#change-bg1" ).mouseout(removeBackground); 



		/* Form checker on submit */
			// JavaScript way 
			// var el = document.getElementById('registration-form');
			// el.onsubmit = formSubmitChecker; 

			// // jQuery way using the on()
			$( "#registration-form" ).on( "submit", formSubmitChecker);

			// // jQuery way using the click()
			// $( "#registration-form" ).submit(formSubmitChecker); 

	// Effects

		// Basic effects 

		// hide()
		// Hides the matched element 
		// var el = $("#listOfFruits");
		// el.hide();

		// // show()
		// // Shows the selected element 
		// $( ".fruits-menu" ).click(function() {
		// 	var el = $("#listOfFruits");
		// 	el.show();
		// });

		
		// toggle()
		// // Changes back and forth to the show and hide method 

		// var el = $("#listOfFruits");
		// $( ".fruits-menu" ).click(function(){
		// 	el.toggle();
		// });


		// Sliding Effects 

		// slideUp()
		// var el = $("#listOfFruits");
		// $( ".fruits-menu" ).click(function(){
		// 	el.slideUp();
		// });

		// // slideToggle()
		// var el = $("#listOfFruits");
		// $( ".fruits-menu" ).click(function(){
		// 	el.slideToggle();
		// });

		// Fadding Effects
		// // fadeOut()
		// var el = $("#listOfFruits");
		// $( ".fruits-menu" ).click(function(){
		// 	el.fadeOut();
		// });

		// // fadeToggle()
		// var el = $("#listOfFruits");
		// $( ".fruits-menu" ).click(function(){
		// 	el.fadeToggle();
		// });

	// Custom 
		// delay()
		// When we want to add extra time 
		// var el = $("#listOfFruits");
		// $( ".fruits-menu" ).click(function(){
		// 	el.delay(3000).slideUp();
		// });

		// // Animation using animate()
		// var el = $("#listOfFruits");
		// $( ".fruits-menu" ).click(function(){
		// 	el.animate({
		//     width: "500px",
		//     opacity: 0.9,
		//     fontSize: "3em",
		//     borderWidth: "10px"
		//   }, 500 );
		// });

});



function changeBackground() {
  document.body.style.backgroundColor = "red";
}


function removeBackground() {
  document.body.style.backgroundColor = "";
}

function formSubmitChecker(e) {
	// Put elements in variable 
	var errors = []; 
	var elErrorsDisplay = $('#errorsDisplay');

	var elFirstName = $(".olla").prevAll("input");
	var elPassword = $('.olla').nextAll("input");
	// Get their values 
	var elFirstNameValue = elFirstName.val(); 
	var elPasswordValue = elPassword.val(); 


	if (!elFirstNameValue) {
		errors.push("First name field is required"); 
	}
	
	if (elPasswordValue.length < 5) {
		errors.push("Password not strong enough"); 
	}

	// console.log(errors);
	if(errors.length > 0) {
		e.preventDefault();
		elErrorsDisplay.html("");
		elErrorsDisplay.css("display", "block");
		for (var i = 0; i < errors.length; i++) {
			elErrorsDisplay.append(errors[i] + "<br>");
		}
		
	}
}