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
		"Gothic",
		"House of Horror",
		"Penn & Teller",
		"Alice Cooper",
		"Walking Dead",
		"Silent Hill"
		
];

var moneyForTickets = 120;
var costPerTicket = 59;
var zombiesRule = true;
var ghostsDrool = false;
var zombieChase = 10;
var howManyHouses = 6;

// Procedure

if (costPerTicket * 2 <= moneyForTickets){
		console.log("Time to party at " + myEvent + "!");
  } else {
		console.log("We haz a sad.");
};	

// Boolean Function

var booFunc = function (isTrue, isFalse) {
	var booReturn;
	if ((isTrue || isFalse) && !(isTrue && isFalse)) {
			booReturn = true;
			console.log("It is " + booReturn + " we love the scare zones!");
	} else {
			booReturn = false;
			console.log("It is utterly " + booReturn + "that scare zones suck!");
	};
	return booFunc;
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

var stringReturn = function (whereToEat, kindOfFood) {
	var grumblyTummy = "Why don't we try ";
	var typeOfFood = "think I have a taste for ";
		console.log("I'm getting hungry, " + typeOfFood + kindOfFood + ". " + grumblyTummy + whereToEat + ".");
		return stringReturn;

};

//Array Function

var arrayReturn = function (houses, numberHouse) {
	var numbHouse;
	var howScary = [" a waste of time. ", " simply horrific. ", " comical as expected ", " OK, I guess. ", " hair raising! ", " wet your pants awesome! "]
		console.log("We want to see " + "all " + numberHouse + " haunted houses!")
		for (var i=0, j=houses.length; i < j; i++) {
			numbHouse = numberHouse * i;	
			console.log("The " + houses[i] + " haunted house" + " was" + howScary[i] + "I screamed " + numbHouse + " times.");
		}
		return arrayReturn;
};


//Returned Values

booFunc(zombiesRule, ghostsDrool);
console.log(numbReturn(zombieChase));
stringReturn(findRestaurant, eatFood);
arrayReturn(hauntedHouses, howManyHouses);



