//Patricia Dacosta
//SDI 1209
//Project 3
//Halloween Horror Nights Continued


//Global Variables

var myEvent 	= "Halloween Horror Nights";
var pplGoing 	= 4;
var booVar 		= true;
var toDo 		= [
				"scarezones",
				"haunted houses",
				"shows",
				"grab a bite"
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

whatToDo: function(whereToGo){
	if (myEvent == "Halloween Horror Nights") {
		console.log("We want to go to " + myEvent + "and get chased by zombies!");
		} else	{
			console.log("We haz a sad.");	
	};
	
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

handleData(houseData);





