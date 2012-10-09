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
	function makeCategory(){
		var formTag = document.getElementsByTagName("form"),
			selectLi = $('dropDown'),
			makeSelect = document.createElement('select');
		makeSelect.setAttribute("id", "groups");
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
			if (radios[i].checked){
				warrantyValue = radios[i].value;
			}
		}
	}

	function getCheckboxValue(){
			if($('own').checked){
				ownValue = $('own').value;
			}else{
				ownValue = "No";	
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
		getCheckboxValue();
		var item				= {};
			item.category		=["Category:", $('groups').value];
			item.itemName		=["Item Name:", $('item_name').value];
			item.sNumber		=["Serial Number: (optional)", $('sNumber').value];
			item.mNumber		=["Model Number: (optional)", $('mNumber').value];
			item.warranty		=["Warranty:", warrantyValue];
			item.date			=["Date:", $('date').value];
			item.own			=["Do You Own Item?:", ownValue];
			item.dValue			=["Dollar Value:", $('dValue').value];
			item.rCost			=["Replacement Cost:", $('rCost').value];	
			//item.quantity		=["Item Quantity:", quantityValue];
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
			var linksLi = document.createElement('li');
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
				makeSubList.appendChild(linksLi);

			}
			makeItemLinks(localStorage.key(i), linksLi); //create edit & delete buttons for each item in local storage

		}
	}
	//Make Item Links
	//Create the edit & delete links for each stored item when displayed.
	function makeItemLinks(key, linksLi){
	//add edit single item link
		var editLink = document.createElement('a');
		editLink.href = "#";
		editLink.key = key;
		var editText = "Edit Item";
		editLink.addEventListener("click", editItem);
		editLink.innerHTML = editText;
		linksLi.appendChild(editLink);
		
		//add line break
		var breakTag = document.createElement('br');
		linksLi.appendChild(breakTag);
		
		//add delete single item link
		var deleteLink = document.createElement('a');
		deleteLink.href = "#";
		deleteLink.key = key;
		var deleteText = "Delete Item";
		//deleteLink.addEventListener("click", deleteItem);
		deleteLink.innerHTML = deleteText;
		linksLi.appendChild(deleteLink);
		
	}
	
	function editItem(){
		//grab the data from the item from local storage
		var value = localStorage.getItem(this.key);
		var item = JSON.parse(value);
		
		//show the form
		toggleControls("off");
		
		//populate the form fields with current localStorage values.
		$('groups').value = item.category[1];
		$('item_name').value = item.itemName[1];
		$('sNumber').value = item.sNumber[1];
		$('mNumber').value = item.mNumber[1];
		var radios = document.forms[0].warranty;
		for(var i=0; i<radios.length; i++){
			if(radios[i].value == "Yes" && item.warranty[1] == "Yes"){
				radios[i].setAttribute("checked", "checked");
				}else if(radios[i].value == "No" && item.warranty[1] == "No"){
					radios[i].setAttribute("checked", "checked");
				}
		}
		$('date').value = item.date[1];	
		if(item.own[1] == "Yes"){
			$('own').setAttribute("checked", "checked");
		}
		$('dValue').value = item.dValue[1];
		$('rCost').value = item.rCost[1];
		$('details').value = item.details[1];
		
		//Remove the initial listener from the input 'save item' button.
		saveItem.removeEventListener("click", storeData);
		//change submit button value to edit button
		$('saveItem').value = "Edit Item";
		var editSubmit = $('saveItem');
		//save the key value established in this function as a property of the edit submit event.
		//so we can use that value when we save the data as edited.
		editSubmit.addEventListener("click", validate);
		editSubmit.key = this.key;	
	}
	
	function deleteData(){
		if(localStorage.length === 0){
			alert("There is no data to clear!");

		}else{
			localStorage.clear();
			alert("All Items Have Been Deleted!");
			window.location.reload();
			return false;
		}
	}
		//Variable Defaults
	var chooseCategory = ["--Select Category--", "Electronics", "Appliances", "Jewelry", "Furniture", "Collectibles", "Art", 		"Apparel", "Housewares", "Firearms", "Equipment", "Tools", "Miscellaneous"],	
		warrantyValue,
		ownValue = "No";				

		makeCategory();

		//Set Link & Submit Click Events	

	var displayData = $('displayData');
	displayData.addEventListener("click", getData);
	var clearData = $('clearData');
	clearData.addEventListener ("click", deleteData);
	var saveItem = $('saveItem');
	saveItem.addEventListener ("click", storeData);










});