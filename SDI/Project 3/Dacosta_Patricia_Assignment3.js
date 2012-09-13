//Patricia Dacosta
//SDI 1209
//Project 3
//Halloween Horror Nights Continued


//Global Variables

var myEvent 	= "Halloween Horror Nights";
var pplGoing 	= 4;
var weCanFit 	= true;
var toDrive 	= [
				"Durango",
				"Miata",
				"Aveo"
];

//Object

var needFood = {
        "peopleMenu": [
            {	
            	"relation":	"hubby",
                "name": 	"George",
                "food": 	"pizza",
                "drink": 	"fruit punch Gatorade" 
            },
            {
            	"relation":	"myself",
                "name": 	"I",
                "food": 	"fruit salad",
                "drink": 	"orange Gatorade" 
            },
            {
            	"relation":	"daughter",
                "name": 	"Kari",
                "food": 	"fetuccini alfredo",
                "drink": 	"orange Gatorade" 
            },
            {
            	"relation":	"son",
                "name": 	"JJ",
                "food": 	"pizza",
                "drink": 	"Pepsi"
            }            
        ]
        
};

	


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
	    console.log("Sadly, we are unable to " + whatToDo.haveFun + ", maybe another time.") 	};   
	    }
};

//Boolean Function
/*

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

*/
//Method Accessor
//Add another loop & concat for wait or remove wait in houses objects...
var handleData = function (data) {	
	for (var i = 0; i < data.houses.length; i++){
		var house = data.houses[i];
		console.log(house.name + " is a " + house.theme + " themed house. We saw " + house.scareactors + ". " + "It took about " + house.howLong + " minutes, to go through the house.");
		
	}; 
};
whatToDo.timeToGo();
handleData(houseData);





