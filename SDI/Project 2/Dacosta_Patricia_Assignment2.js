/*
Patricia Dacosta
SDI 1209
Project 2
Adventure at Halloween Horror Nights
*/

//Initial Variables

var myEvent = "Halloween Horror Nights";
var findRestaurant = "Luigi's Italian Cafe";
var eatFood = "pizza";
var hauntedHouses = [
		"Silent Hill",
		"Walking Dead",
		"Alice Cooper",
		"Penn & Teller",
		"House of Horror",
		"Gothic"
];
//var waitInMinutes = [10, 20, 30, 40, 50, 60];
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

var stringReturn = function (findRestaurant, eatFood) {
	var grumblyTummy = "Why don't we try ";
	var typeOfFood = "think I have a taste for ";
		console.log("I'm getting hungry, " + typeOfFood + eatFood + ". " + grumblyTummy + findRestaurant + ".");
		return stringReturn;

};

//Array Function

var arrayReturn = function (hauntedHouses) {
	var hauntedHouses = ["Silent Hill", "Walking Dead", "Alice Cooper", "Penn & Teller", "House of Horror", "Gothic"];
	var howScary = [" wet your pants awesome!", " hair raising !", " OK I guess.", " comical as expected.", " simply horrific.", " a waste of time."]
		for (var i=0, j=hauntedHouses.length; i < j; i++) {
			console.log("The " + hauntedHouses[i] + " haunted house" + " was" + howScary[i]);
		}

};



//Returned Values

booFunc(zombiesRule, ghostsDrool);
console.log(numbReturn(zombieChase));
stringReturn(findRestaurant, eatFood);
arrayReturn(hauntedHouses);
















