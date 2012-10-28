/*
Patricia Dacosta
MIU 1211
Project 1
main.js
October 25, 2012
*/
//Wait until DOM is ready

window.addEventListener("DOMContentLoaded", function(){

	//getElementById Function
	function ge(x){
		var theElement = document.getElementById(x);
		return theElement;
	}

	//create select field element with options
	function makeCategory(){
		var formTag = document.getElementsByTagName("form"),
			selectLi = ge('dropDown'),
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
			if(ge('own').checked){
				ownValue = ge('own').value;
			}else{
				ownValue = "No";	
			}
	}

	function toggleControls(n){
		switch(n){
			case "on":
				ge('itemForm').style.display = "none";
				ge('clearData').style.display = "inline";
				ge('displayData').style.display = "none";
				ge('addNew').style.display = "inline";
				break;
			case "off":
				ge('itemForm').style.display = "block";
				ge('clearData').style.display = "inline";
				ge('displayData').style.display = "inline";
				ge('addNew').style.display = "none";
				ge('items').style.display = "none";
				break;
			default:
				return false;		

		}
	}

	function storeData(key){
		//If there is no key, it means this is a new record & needs new key.
	if(!key){		
		var id			= Math.floor(Math.random()*8675309);
	}else{
		//Set the id to the existing key being edited to save data.
		//The key is the same key that has been passed from the editSubmit event handler.
		//Goes next to validate function and then passed here, into the storeData function.
		id = key;
	}		
		//Gather all form field values & store in an object.
		//Object properties contain array with the form label & input value.
		getSelectedRadio();
		getCheckboxValue();
		var item				= {};
			item.category		=["Category:", ge('groups').value];
			item.itemName		=["Item Name:", ge('item_name').value];
			item.sNumber		=["Serial Number: (optional)", ge('sNumber').value];
			item.mNumber		=["Model Number: (optional)", ge('mNumber').value];
			item.warranty		=["Warranty:", warrantyValue];
			item.date			=["Date:", ge('date').value];
			item.own			=["Do You Own Item?:", ownValue];
			item.dValue			=["Dollar Value:", ge('dValue').value];
			item.rCost			=["Replacement Cost:", ge('rCost').value];	
			item.quantity		=["Item Quantity:", ge('quantity').value];
			item.details		=["Details:", ge('details').value];
		//Save data inot local storage: Use Stringify to convert our object to a string.
		localStorage.setItem(id, JSON.stringify(item));
		alert("Item Saved!");
	}

	function getData(){
		toggleControls("on");
		if(localStorage.length === 0){
			alert("There is no data in local storage, so default data was added!");
			autoFillData();
		}
		
		var makeDiv = document.createElement('div');
		makeDiv.setAttribute("id", "items");
		var makeList = document.createElement('ul');
		makeDiv.appendChild(makeList);
		document.body.appendChild(makeDiv);
		ge('items').style.display = "block";
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
			getImage(obj.category[1], makeSubList);
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
	//get image for selected category
	function getImage(categoryName, makeSubList){
		var imageLi = document.createElement('li');
		makeSubList.appendChild(imageLi);
		var newImg = document.createElement('img');
		var setSrc = newImg.setAttribute("src", "img/"+ categoryName + ".gif");
		imageLi.appendChild(newImg);
	}
	function autoFillData(){
		//The actual JSON OBJECT data required for this to work is coming from the JSON.js file, loaded from HTML.
		//Store JSON OBJECT into local storage.
		for(var n in json){
			var id = Math.floor(Math.random()*8675309);
			localStorage.setItem(id, JSON.stringify(json[n]));
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
		deleteLink.addEventListener("click", deleteItem);
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
		ge('groups').value = item.category[1];
		ge('item_name').value = item.itemName[1];
		ge('sNumber').value = item.sNumber[1];
		ge('mNumber').value = item.mNumber[1];
		var radios = document.forms[0].warranty;
		for(var i=0; i<radios.length; i++){
			if(radios[i].value == "Yes" && item.warranty[1] == "Yes"){
				radios[i].setAttribute("checked", "checked");
				}else if(radios[i].value == "No" && item.warranty[1] == "No"){
					radios[i].setAttribute("checked", "checked");
				}
		}
		ge('date').value = item.date[1];	
		if(item.own[1] == "Yes"){
			ge('own').setAttribute("checked", "checked");
		}
		ge('dValue').value = item.dValue[1];
		ge('rCost').value = item.rCost[1];
		ge('quantity').value = item.quantity[1];
		ge('details').value = item.details[1];
		
		//Remove the initial listener from the input 'save item' button.
		saveItem.removeEventListener("click", storeData);
		//change submit button value to edit button
		ge('saveItem').value = "Edit Item";
		var editSubmit = ge('saveItem');
		//save the key value established in this function as a property of the edit submit event.
		//so we can use that value when we save the data as edited.
		editSubmit.addEventListener("click", validate);
		editSubmit.key = this.key;	
	}
	
	function deleteItem(){
		var ask = confirm("Are you sure you want to delete this item?");
		if (ask){
			localStorage.removeItem(this.key);
			window.location.reload();
		}else{
			alert("Item was NOT deleted!");
		}
	}
	function deleteData(){
		var askAll = confirm("WARNING! This will delete ALL inventory items! Press OK to continue.");	
		if(localStorage.length === 0){
			alert("There is no data to clear!");

		}else if(askAll){
			localStorage.clear();
			alert("All Items Have Been Deleted!");
			window.location.reload();
			return false;
			}else{
				alert("Inventory items were NOT deleted!");
		}
	}
	
	function validate(eventData){
		//Define the elements to be checked
		var getGroup = ge('groups');
		var getItemName = ge('item_name');
		var getDvalue = ge('dValue');
		var getRcost = ge('rCost');
		
		//Reset Error Messages
		errorMsg.innerHTML = "";
		getGroup.style.border = "1px solid black";
		getItemName.style.border = "1px solid black";
		getDvalue.style.border = "1px solid black";
		getRcost.style.border = "1px solid black";						
		// get error messages
		var messageArray = [];
		// group validation
		if(getGroup.value ==="--Select Category--"){
			var groupError = "Please select a category!";
			getGroup.style.border = "2px solid red";
			messageArray.push(groupError);
		} 
		
		//Item name validation
		if(getItemName.value === ""){
			var itemNameError = "Please enter an item name!";
			getItemName.style.border = "2px solid red";
			messageArray.push(itemNameError);
		}
		
		//Dollar Value validation
		if(getDvalue.value === ""){
			var dValueError = "Please enter a dollar value!";
			getDvalue.style.border = "2px solid red";
			messageArray.push(dValueError);
		
		}
		
		//Replacement Cost Validation
		if(getRcost.value === ""){
			var rCostError = "Please enter the replacement cost!";
			getRcost.style.border = "2px solid red";
			messageArray.push(rCostError);
		}			
		
		//If there are any errors, display errors on screen
		if(messageArray.length >= 1){
			for(var i=0, j=messageArray.length; i < j; i++){
				var txt = document.createElement('li');
				txt.innerHTML = messageArray[i];
				errorMsg.appendChild(txt);			
			}
			eventData.preventDefault();
			return false;
		}else{
			//if all is OK, save the data. Send key value from editData function. Key value was passed through the editSubmit event listener
			storeData(this.key);
		}
		
		
	}
	
		//Variable Defaults
	var chooseCategory = ["--Select Category--", "Electronics", "Appliances", "Jewelry", "Collectibles", "Art", 		"Apparel", "Household", "Tools", "Miscellaneous"],	
		warrantyValue = "No",
		ownValue = "No";	
		errorMsg = ge('errors');			

		makeCategory();

		//Set Link & Submit Click Events	

	var displayData = ge('displayData');
	displayData.addEventListener("click", getData);
	var clearData = ge('clearData');
	clearData.addEventListener ("click", deleteData);
	var saveItem = ge('saveItem');
	saveItem.addEventListener ("click", validate);










});