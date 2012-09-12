//Patricia Dacosta
//SDI 1209
//Project 3
//Halloween Horror Nights Continued

//Stringify
//var jsonstring = JSON.stringify(json);

//Parse
//var receivedjson = JSON.parse(jsonstring);

//Global Variables

//var myEvent = "Halloween Horror Nights";
var handleData = function (data) {
	
for (var i = 0; i < data.houses.length; i++){
		var house = data.houses[i];
		console.log(house.name + " is a " + house.theme + " themed house. We saw " + house.scareactors + ". " + "It took about " + house.howLong + " minutes, to go through the house.");
		
	}; 
};

handleData(houseData);





