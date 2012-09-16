//Patricia Dacosta
//SDI 1209
//Project 4
//String, Number and Array manipulation & regular expressions.



var pattiLibrary = function () {

//Phone Number Pattern
	
	var validatePhone = function (phoneNumber) {
		var phoneRegEx = /^[0-9]{3}[\-]{1}[0-9]{3}[\-]{1}[0-9]{4}$/;
		var	phoneCheck = phoneRegEx.test(phoneNumber);
	return phoneCheck;
	};

//Email Pattern

	var validateEmail = function (email) {
		var emailRegEx = /^[\w._%+-]+@{1}[\w-]+\.[a-z]{2,6}$/;
		var emailCheck = emailRegEx.test(email);
	return emailCheck;		
	};

//URL Pattern
	var validateUrl = function (url) {
		var urlRegEx = /(?:[\w-]+\.)+[a-z]{2,6}$/;
        var	urlCheck = urlRegEx.test(url);
        	if ((url.indexOf("http:") == 0) || (url.indexOf("https:") == 0)) {
            urlCheck = true;
          } else if (check === true) {
            urlCheck = true;
          } else {
            urlCheck = false;
        };
     return urlCheck;
    };
// All Returns


	return {
		"phoneCheck"	:	validatePhone,
		"emailCheck"	:	validateEmail,
		"urlCheck"		:	validateUrl
	};	

};

var library = new pattiLibrary();


console.log("123-456-7890 = " + library.phoneCheck("123-456-7890"));
console.log("email@domain.com = " + library.emailCheck("email@domain.com"));
console.log("https://www.thiswebsite.com = " + library.urlCheck("https://www.thiswebsite.com"));














//Title-case

//String separator manipulation

//Decimal places

//Fuzzy match

//Difference between two dates (hours or days)

//Variable to number

//Smallest vaue in an array that is greater than a given number

//Total value of just the numbers in an array

//Array of objects sorted by key