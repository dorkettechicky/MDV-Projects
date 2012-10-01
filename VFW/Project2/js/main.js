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
	
	//create select field element with options
	function selectionOne(){
		var formTag = document.getElementsByTagName("form"),
			selectLi = $('select'),
			makeSelect = document.createElement('select');
		makeSelect.setAttribute("id", "category");
		for (var i = 0, j=chooseCategory.length; i<j; i++){
			var makeOption = document.createElement('option');
			var optText = chooseCategory[i];
			makeOption.setAttribute("value", optText);
			makeOption.innerHTML = optText;
			makeSelect.appendChild(makeOption);
		}
		selectLi.appendChild(makeSelect);
	}
	//Variable Defaults
	var chooseCategory = ["--Select Category--", "Electronics", "Appliances", "Jewelry", "Furniture", "Collectibles", "Art", 		"Apparel", "Housewares", "Firearms", "Equipment", "Tools", "Miscellaneous"];	
	
	var howAcquired = ["--How Acquired--", "Purchased", "Gift", "Inherited", "Unknown"];
	
	selectionOne();
		//Set Link & Submit Click Events	
	
	var displayLink = $('displayData');
	displayLink.addEventListener("click", getData);
	var clearLink = $('clearData');
	clearLink.addEventListener ("click", clearData);
	var saveButton = $('saveItem');
	save.addEventListener ("click", storeData);
	
	
	
	
	
	
	
	
	
	
});