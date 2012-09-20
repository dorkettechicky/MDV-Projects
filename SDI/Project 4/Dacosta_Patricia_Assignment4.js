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

//URL Pattern //recheck line 34
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

//Fuzzy match

	var fuzzyNum = function (num1, num2, percentage){
		var compare = num2*(percentage/100);
		var getFuzzy = (num1 >= num2 - compare && num1 <= num2 + compare);
	return getFuzzy	
	};


//Difference between two dates (hours or days)

 	//String to number


	var stringToNum = function(string){
	return parseFloat(string);
	
	};

//Smallest value in an array that is greater than a given number

	var numArray = function (array, givNum) {
		var smallVal = Number.POSITIVE_INFINITY;
		for (var i = 0; i < array.length; i++) {
			if (givNum < array[i] && array[i] < smallVal) {
				smallVal = array[i];
			};
		};
	return smallVal;
	};


//Total value of just the numbers in an array

	var addNum = function(arr) {
	var numSum = 0;
		for (var i = 0; i < arr.length; i++) {
			if (!isNaN(parseInt(arr[i]))) { numSum += arr[i]; }		
			};
		return numSum;
				
};


//Array of objects sorted by key


// All Returns


	return {
		"phoneCheck":validatePhone,
		"emailCheck":validateEmail,
		"urlCheck":validateUrl,
		"titleCase":titleCase,
		"chSwitch":chSwitch,
		"changeDec":changeDec,
		"fuzzyNum":fuzzyNum,
		"stringToNum":stringToNum,
		"numArray":numArray,
		"addNum":addNum
	
		
	};	





	

};

var library = new pattiLibrary();


console.log("123-456-7890 = " + library.phoneCheck("123-456-7890"));
console.log("email@domain.com = " + library.emailCheck("email@domain.com"));
console.log("https://www.thiswebsite.com = " + library.urlCheck("https://www.thiswebsite.com"));
console.log("the lazy brown fox jumped over the fence = " + library.titleCase("the lazy brown fox jumped over the fence"));
console.log("a,b,c = " + library.chSwitch("a,b,c", ",", "/"));
console.log("2.1 = " + library.changeDec(2.1));
console.log("Fuzzy match = " + library.fuzzyNum(20, 40, 60));
console.log("The string \"43\" is now the number " + library.stringToNum("43"));
console.log("The lowest number of the array that is greater than the given number is, " + library.numArray([2,14,9,23,12], 8));
console.log("The total of the numbers within the array is = " + library.addNum([true, 4, 6, "NaN", false, 8]));




















