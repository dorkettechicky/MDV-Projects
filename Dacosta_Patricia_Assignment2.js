/*
Patricia Dacosta
SDI 1209
Project 2
Adventure at Halloween Horror Nights
*/

//Initial Variables

var myEvent = "Halloween Horror Nights";
var hauntedHouses = [
		"Silent Hill",
		"Walking Dead",
		"Alice Cooper",
		"Penn & Teller",
		"House of Horror",
		"Gothic"
];
var waitInMinutes = [0, 15, 30, 45, 90, 120];
var moneyToSpend = 150;
var costPerTicket = 59;
var zombiesRule = true;
var ghostsDrool = false;
var myShows = [
		"Rocky Horror Tribute",
		"Bill & Ted's Excellent Halloween Adventure",
		"Freak Show",
		"Magic Show"
];
var myRides = [
		"The Mummy",
		"Earthquake",
		"The Simpsons",
		"Rip Ride Rocket"
];

// Procedure

if (costPerTicket * 2 <= moneyToSpend){
		console.log("Time to party at " + myEvent + "!");
  } else {
		console.log("We haz a sad.");
};	

// Boolean Function

var booFunc = function (zombiesRule, ghostsDrool) {
	var booReturn;
	if ((zombiesRule || ghostsDrool) && !(zombiesRule && ghostsDrool)) {
			booReturn = true;
			console.log("It is " + booReturn + " that the zombies made me scream!");
	} else {
			booReturn = false;
			console.log("It is utterly " + booReturn + "that I am afraid of ghosts!");
	};
	return booReturn;
};

//Number Function






//Returned Values
booFunc(zombiesRule, ghostsDrool);


















