/*
Patricia Dacosta
VFW 1210
Project 2
main.js
*/
//Wait until DOM is ready

window.addEventListener("DomContentLoaded", function(){
	
	//getElementById Function
	function $(x){
		var theElement = document.getElementById(x);
		return theElement;
	}
	
	
	//Variable Defaults
	var chooseCategory = ["--Select Category--", "Electronics", "Appliances", "Jewelry", "Furniture", "Collectibles", "Art", "Apparel", "Housewares", "Firearms", "Equipment", "Tools", "Miscellaneous"];	
	
	
	//Set Link & Submit Click Events	
	
	var displayLink = $('displayData');
	displayLink.addEventListener("click", getData);
	var clearLink = $('clearData');
	clearLink.addEventListener ("click", clearData);
	var save = $('saveItem');
	save.addEventListener ("click", storeData);
	
	
	
	
	
	
	
	
	
	
});