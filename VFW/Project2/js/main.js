/*
Patricia Dacosta
VFW 1210
Project 2
main.js
*/
//Wait until DOM is ready

window.addEventListener("DOMContentLoaded", function(){
	
	//getElementById Function
	function $(x){
		var theElement = document.getElementById(x);
		return theElement;
	}
	
	//create select field element with options
	function selectionOne(){
		var formTag = document.getElementsByTagName("form"),
			selectLi = $('dropDown'),
			makeSelect = document.createElement('select');
		makeSelect.setAttribute("id", "categories");
		for (var i = 0, j=chooseCategory.length; i<j; i++){
			var makeOption = document.createElement('option');
			var optText = chooseCategory[i];
			makeOption.setAttribute("value", optText);
			makeOption.innerHTML = optText;
			makeSelect.appendChild(makeOption);
		}
		selectLi.appendChild(makeSelect);
	}
	
	//Find value of selected radio button.
	function getSelectedRadio(){
		var radio = document.forms[0].warranty;
		for(var i=0; i<radio.length; i++){
			if(radios[i].checked){
			warrantyValue = radios[i].value;
			}
		}
	}
	function storeData(){
		var id			= Math.floor(Math.random()*8675309);
		//Gather all form field values & store in an object.
		//Object properties contain array with the form label & input value.
		getSelectedRadio();
		var item				= {};
			item.categories		=["Category:", $('categories').value];
			item.itemName		=["Item Name:", $('item_name').value];
			item.sNumber		=["Serial Number: (optional)", $('sNumber').value];
			item.mNumber		=["Model Number: (optional)", $('mNumber').value];
			//item.warranty		=["Warranty:", warrantyValue];
			item.date			=["Date:", $('date').value];
			//item.hAcquired	=["How Acquired?:", hAcquiredValue];
			//item.haveReceipt	=["Have Receipt?", haveReceiptValue];
			item.dValue			=["Dollar Value:", $('dValue').value];
			item.rCost			=["Replacement Cost:", $('rCost').value];	
			//item.condition		=["Condition:", conditionValue];
			item.details		=["Details:", $('details').value];
		//Save data inot local storage: Use Stringify to convert our object to a string.
		localStorage.setItem(id, JSON.stringify(item));
		alert("Item Saved!");
	}
		//Variable Defaults
	var chooseCategory = ["--Select Category--", "Electronics", "Appliances", "Jewelry", "Furniture", "Collectibles", "Art", 		"Apparel", "Housewares", "Firearms", "Equipment", "Tools", "Miscellaneous"],	
		warrantyValue;
	
	var howAcquired = ["--How Acquired--", "Purchased", "Gift", "Inherited", "Unknown"];
	
	selectionOne();
	
		//Set Link & Submit Click Events	
	
	/*var displayLink = $('displayData');
	displayLink.addEventListener("click", getData);
	var clearLink = $('clearData');
	clearLink.addEventListener ("click", clearData);*/
	var saveButton = $('saveItem');
	save.addEventListener ("click", storeData);
	
	
	
	
	
	
	
	
	
	
});