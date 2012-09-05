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

if (costPerTicket * 2 <= moneyToSpend){
	console.log("Time to party at " + myEvent + "!");
}	else {
		console.log("We haz a sad.");
	}	

