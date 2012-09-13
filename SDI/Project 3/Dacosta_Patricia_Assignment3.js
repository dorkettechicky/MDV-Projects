//Patricia Dacosta
//SDI 1209
//Project 3
//Halloween Horror Nights Continued


//Global Variables

var myEvent 	= "Halloween Horror Nights";
var pplGoing 	= 4;
var myCity		= "Orlando"
var weCanFit 	= true;
var whoGoes 	= [
				"George",
				"Kari",
				"JJ",
				"I"
];

/*
var needFood = {
        "peopleEat": [
            {	
                "name": 	"George",
                "food": 	"pizza",
                "drink": 	"fruit punch Gatorade",
                "Cost":		7
            },
            {
                "name": 	"Patti",
                "food": 	"fruit salad",
                "drink": 	"orange Gatorade",
                "cost":		8 
            },
            {
                "name": 	"Kari",
                "food": 	"fetuccini alfredo",
                "drink": 	"orange Gatorade",
                "cost":		9
            },
            {
                "name": 	"JJ",
                "food": 	"pizza",
                "drink": 	"Pepsi",
                "cost":		7
            }            
        ]
        
};
*/
	


//Method Procedure

var whatToDo = {
    		haveFun: "go out",
    		whereTo: "Halloween Horror Nights",
    		doWhat: ["Haunted Houses", "Scarezones", "Shows"],
    		booProc: true,    
    		timeToGo: function (getAway) {
    var haveFun = getAway;
        if (whatToDo.booProc === true) {
	    console.log("We want to " + whatToDo.haveFun + "! So, we will go to " + whatToDo.whereTo + ", and get to see " + whatToDo.doWhat[0] + ", " + whatToDo.doWhat[1] + " and " + whatToDo.doWhat[2] + "!");
	} else {
	    console.log("Sadly, we are unable to " + whatToDo.haveFun + ", maybe another time.") };   
	    }
};	    
	    
//Number Function

var numbReturn = function (milesToGo) {
	var milesFromHome = 0;
	var milesToGo = 80;
	while (milesToGo > 0) {
			console.log("We only have " + milesToGo + " miles, to go!");
	milesToGo-=10;
	
		/*for (var milesFromHome = 0; milesFromHome < 80; milesFromHome+=20)
		console.log("We have to stop after " + milesFromHome + " miles, so that " + whoGoes[i] + " can go to the bathroom!");*/
	} 
	return milesToGo;	
};			


//Mutator Method


//Number Function

//Method Accessor
//Possible for 2nd loop & concat for wait or remove wait in houses objects?
var handleData = function (data) {	
	for (var i = 0; i < data.houses.length; i++){
		var house = data.houses[i];
		console.log(house.name + " is a " + house.theme + " themed house. We saw " + house.scareactors + ". " + "It took about " + house.howLong + " minutes, to go through the house.");
		
	};
	return data; 
};
whatToDo.timeToGo();
console.log("Time to drive to " + myCity + "!");
numbReturn();
handleData(houseData);



