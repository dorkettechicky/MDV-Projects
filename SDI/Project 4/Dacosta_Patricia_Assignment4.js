//Patricia Dacosta
//SDI 1209
//Project 4
//String, Number and Array manipulation & regular expressions.



var pattiLibrary = function () {

//Phone Number Pattern
	
	var validatePhone = function (phoneNumber) {
		regEx = /^[0-9]{3}[\-]{1}[0-9]{3}[\-]{1}[0-9]{4}$/;
		var	phoneCheck = regEx.test(phoneNumber);
	return phoneCheck;
	};


// All Returns


	return {
		"phoneCheck"	:	validatePhone
		
	};	

};

var library = new pattiLibrary();


console.log("123-456-7890 = " + library.phoneCheck("123-456-7890"));












//URL Pattern

//Title-case

//String separator manipulation

//Decimal places

//Fuzzy match

//Difference between two dates (hours or days)

//Variable to number

//Smallest vaue in an array that is greater than a given number

//Total value of just the numbers in an array

//Array of objects sorted by key