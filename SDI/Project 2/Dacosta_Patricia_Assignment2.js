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
var moneyForTickets = 120;
var costPerTicket = 59;
var zombiesRule = true;
var ghostsDrool = false;
var zombieChase = 10;

// Procedure

if (costPerTicket * 2 <= moneyForTickets){
		console.log("Time to party at " + myEvent + "!");
  } else {
		console.log("We haz a sad.");
};	

// Boolean Function

var booFunc = function (zombiesRule, ghostsDrool) {
	var booReturn;
	if ((zombiesRule || ghostsDrool) && !(zombiesRule && ghostsDrool)) {
			booReturn = true;
			console.log("It is " + booReturn + " we love the scare zones!");
	} else {
			booReturn = false;
			console.log("It is utterly " + booReturn + "that scare zones suck!");
	};
	return booReturn;
};

//Number Function

var numbReturn = function (zombieChase) {
	var myHubby = "George";
	var myName = 'I';
	var zombieChase = 1;
	while (zombieChase <= 10) {
			console.log("Walking through the scare zone, " + zombieChase + " zombies chased us!");
	zombieChase++;
	}; 
		if (zombieChase > 0) {
			console.log(myHubby + " & " + myName + " had to run away.")
		} else {
			console.log(myName = " think these zombies are lame!")
	}
			
	return "We escaped from the zombies!";
};

//String Function

//var... = func = function () {

//}




//Returned Values

booFunc(zombiesRule, ghostsDrool);
console.log(numbReturn(zombieChase));


















