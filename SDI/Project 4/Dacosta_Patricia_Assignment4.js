//Patricia Dacosta
//SDI 1209
//Project 4
//String, Number and Array manipulation & regular expressions.



var pattiLibrary = function () {

//String block portion of assignment

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

//Title-case

	var titleCase = function (string) {
		var initCap = function (string) {
			return string.charAt(0).toUpperCase() + string.substr(1);
		};
		initCapped = string.replace(/\w\S*/g, initCap);
	return initCapped;
	};

//String separator manipulation

	var chSwitch = function (string, separator1, separator2) {
	var switched = string.split(separator1).join(separator2);
	return switched;
		
	};

//Number block portion of assignment

//Decimal placement

	var changeDec = function (number) {
		var decimal = number.toFixed(2);
	return decimal;	
	};


// All Returns


	return {
		"phoneCheck"	:	validatePhone,
		"emailCheck"	:	validateEmail,
		"urlCheck"		:	validateUrl,
		"titleCase"		:	titleCase,
		"chSwitch"		:	chSwitch,
		"changeDec"		:	changeDec
	};	

};

var library = new pattiLibrary();


console.log("123-456-7890 = " + library.phoneCheck("123-456-7890"));
console.log("email@domain.com = " + library.emailCheck("email@domain.com"));
console.log("https://www.thiswebsite.com = " + library.urlCheck("https://www.thiswebsite.com"));
console.log("the lazy brown fox jumped over the fence = " + library.titleCase("the lazy brown fox jumped over the fence"));
console.log("a,b,c = " + library.chSwitch("a,b,c", ",", "/"));
console.log("2.1 = " + library.changeDec(2.1));

















//Fuzzy match

//Difference between two dates (hours or days)

//Variable to number

//Smallest vaue in an array that is greater than a given number

//Total value of just the numbers in an array

//Array of objects sorted by key