//Patricia Dacosta
//SDI 1209
//Project 3
//Halloween Horror Nights Continued


//Global Variables

var myEvent = "Halloween Horror Nights";

var handleData = function (data) {


//Boolean Function

var booFunc = function (blah1, blah2) {
	var booReturn;
	if ((blah1 || blah2) && !(blah1 && blah2)) {
			booReturn = true;
			console.log();
	} else {
			booReturn = false;
			console.log();
	};
	return booReturn;
};

//Number Function




	
for (var i = 0; i < data.houses.length; i++){
		var house = data.houses[i];
		console.log(house.name + " is a " + house.theme + " themed house. We saw " + house.scareactors + ". " + "It took about " + house.howLong + " minutes, to go through the house.");
		
	}; 
};

handleData(houseData);





