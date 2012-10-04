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
		var radios = document.forms[0].warranty;
		for(var i=0; i<radios.length; i++){
			if(radios[i].checked){
			warrantyValue = radios[i].value;
			}
		}
	}
	
	function getCheckboxValue(){
			if($('own').checked){
				ownedValue = $('own').value;
			}else{
				ownedValue = "No"	
			}
	}
	
	function toggleControls(n){
		switch(n){
			case "on":
				$('itemForm').style.display = "none";
				$('clearData').style.display = "inline";
				$('displayData').style.display = "none";
				$('addNew').style.display = "inline";
				break;
			case "off":
				$('itemForm').style.display = "block";
				$('clearData').style.display = "inline";
				$('displayData').style.display = "inline";
				$('addNew').style.display = "none";
				$('items').style.display = "none";
				break;
			default:
				return false;		
				
		}
	}
		
	function storeData(){
		var id			= Math.floor(Math.random()*8675309);
		console.log("storeData fired");
		//Gather all form field values & store in an object.
		//Object properties contain array with the form label & input value.
		getSelectedRadio();
		var item				= {};
			item.category		=["Category:", $('dropDown').value];
			item.itemName		=["Item Name:", $('item_name').value];
			item.sNumber		=["Serial Number: (optional)", $('sNumber').value];
			item.mNumber		=["Model Number: (optional)", $('mNumber').value];
			//item.warranty		=["Warranty:", warrantyValue];
			item.date			=["Date:", $('date').value];
			//item.own			=["Do You Own Item?:", ownValue];
			item.dValue			=["Dollar Value:", $('dValue').value];
			item.rCost			=["Replacement Cost:", $('rCost').value];	
			//item.condition		=["Condition:", conditionValue];
			item.details		=["Details:", $('details').value];
		//Save data inot local storage: Use Stringify to convert our object to a string.
		localStorage.setItem(id, JSON.stringify(item));
		alert("Item Saved!");
	}
	
	function getData(){
		toggleControls("on");
		if(localStorage.length === 0){
			alert("There are no items saved!");
		}
		var makeDiv = document.createElement('div');
		makeDiv.setAttribute("id", "items");
		var makeList = document.createElement('ul');
		makeDiv.appendChild(makeList);
		document.body.appendChild(makeDiv);
		$('items').style.display = "block";
		for(var i=0, len=localStorage.length; i<len; i++){
			var makeli = document.createElement('li');
			makeList.appendChild(makeli);
			var key = localStorage.key(i);
			var value = localStorage.getItem(key);
//Convert string from local storage value back to object using JSON.parse
			var obj = JSON.parse(value);
			var makeSubList = document.createElement('ul');
			makeli.appendChild(makeSubList);
			for(var n in obj){
				var makeSubli = document.createElement('li');
				makeSubList.appendChild(makeSubli);
				var optSubText = obj[n][0]+" "+obj[n][1];
				makeSubli.innerHTML = optSubText;
				
			}
			
		}
	}
	
	function deleteData(){
		if(localStorage.length === 0){
			alert("There is no data to clear!")
		
		}else{
			localStorage.clear();
			alert("All Items Have Been Deleted!");
			window.location.reload();
			return false;
		}
	}
		//Variable Defaults
	var chooseCategory = ["--Select Category--", "Electronics", "Appliances", "Jewelry", "Furniture", "Collectibles", "Art", 		"Apparel", "Housewares", "Firearms", "Equipment", "Tools", "Miscellaneous"];	
		//warrantyValue,
		//ownedValue;
		
		selectionOne();
	
		//Set Link & Submit Click Events	
	
	var displayData = $('displayData');
	displayData.addEventListener("click", getData);
	var clearData = $('clearData');
	clearData.addEventListener ("click", deleteData);
	var saveItem = $('saveItem');
	saveItem.addEventListener ("click", storeData);
	
	
	
	
	
	
	
	
	
	
});