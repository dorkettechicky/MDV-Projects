/*
Patricia Dacosta
ASD 1301
Project 1
main.js
January 10, 2013
*/

/*
**Notes**

Upon clicking on any of the browse pages (home page) the app will then freeze and must be manually reloaded (hitting refresh on the browser does not recover the app), due to this issue calls under page calls have been commented out.

Currently working:

Form values are saving to local storage (storeData), however attempting window.location.reload() upon save, freezes app.

deleteData is working properly, deletes all data from local storage, confirm and alerts pop, and reloads page after delete.

Unable to get data to populate back to form or to display all, this is preventing the ability to test editItem and deleteItem functions as well as autofill.
*/


//Global Variables


$('#home').on('pageinit', function(){
	//code needed for home page goes here
});	

$('#delAll').on("click", function(){
	deleteData();
});

$('#dispAll').on('pageinit', function(){
		
});

$('#reset').on("click", function(){
	window.location.reload();
});
$('#electronics').on('pageinit', function(){
	if (localStorage.length === 0){
		autofillData();
	}
	getData("Electronics");
});

		
$('#appliances').on('pageinit', function(){
	
});
		
$('#jewelry').on('pageinit', function(){

});
		
$('#collectibles').on('pageinit', function(){

});
		
$('#art').on('pageinit', function(){
	
});
		
$('#apparel').on('pageinit', function(){
	
});
		
$('#household').on('pageinit', function(){
	
});
		
$('#tools').on('pageinit', function(){

});
		
$('#miscellaneous').on('pageinit', function(){
	
});

$('#dispAll').on('pagecreate', function(){
	if (localStorage.length === 0){
		autofillData();
	}
	getData();
	
});
		


/*
$('#additem').on('pagecreate', function(){
	createSelect();
});
*/
		
$('#additem').on('pageinit', function(){
/* 	save.click(validate); */

		var myForm = $('#addItemForm'),
			errorsLink = $('#errorsLink');
			
		    myForm.validate({
		    errorPlacement: function(error, element) {
 	 if (element.attr("name") === "category") {
 	 error.insertAfter($(element).parent());
 	 } else {
 	 error.insertAfter(element);
 	 }
 	},			invalidHandler: function(form, validator) {
 					errorsLink.click();
 					var html = '';
 					for(var key in validator.submitted){
 						var label = $('label[for^="'+ key +'"]').not('[generated]');
 						var legend = label.closest('fieldset').find('.ui-controlgroup-label');
 						var fieldName = legend.length ? legend.text() : label.text();
 						html += '<li>' + fieldName + '</li>';
	 					
 					};
 					$("#recordErrors ul").html(html);
			},
			
			submitHandler: function() {
		var data = myForm.serializeArray();
			storeData(data);
		}
			});
	
	//any other code needed for addItem page goes here
	
});

//The functions below can go inside or outside the pageinit function for the page in which it is needed.

var autofillData = function (){
	console.log("autofill Fired");
	for (var n in json) {
		var id = Math.floor(Math.random()*8675309);
		localStorage.setItem(id, JSON.stringify(json[n]));
	}
	 
};

var getData = function(){
		var category = id;
		var makeList = $(document.createElement('ul'));
		$(id + 'data').append(makeList)
		.attr('id', id+items)
		.attr('data-role', listview);
		for(var i=0, j=localStorage.length; i<j; i++){
			var key = localStorage.key(i);
			var value = localStorage.getItem(key);
			var obj = JSON.parse(value);
			var makeSubList = $(document.createElement('div'));
			var linkLi = $(document.createElement('div'));
			if(category === obj.cats[1]){
				$('makeSubList')
				.attr('id', id + "items")
				.attr('data-role', collapsible)
				.attr('data-inset', true)
				.append(makeSubList);
				var h3 = $(document.createElement('h3'));
				makeSubList.append(h3);
				var opth3Test = obj.name[1];
				for (var n in obj) {
					var makeSubLi = $(document.createElement('div'));
					h3.html = optH3Text;
					makeSubList.append(makeSubLi);
					makeSubLi.attr('class', 'inner');
					var optSubText = obj[n][0] + " "+obj[n][1];
					makeSubLi.html = optSubText;
					makeSubLi.append(linkLi);
				}
			}
			makeItemLink(localStorage.Key(i), linkLi);
		}
		if(localStorage.length === 0){
			alert("There is no data in local storage, so default data was added!");
			autoFillData();
		}


};

/*
	var category = ["Select", "Electronics", "Appliances", "Jewelry", "Collectibles", "Art", "Apparel", "Household", "Tools", "Miscellaneous"];	
	var save = $("#submit")
	
	
	function createSelect(){
	var	dropDown = $("select");
	var chooseCat = $(document.createElement('option'))
		.attr({
			"id": "cats",
			"name": "cats",
			"class": "required",
			"data-native-menu": "false"
		});
		var placeHolder = $(document.createElement('option'))
		.attr({
			"data-placeholder": "true",
			"value": "",
			.html("Choose Category");

		});		

			
	for (var i=0, j=category.length; i<j; i++){
		var makeOption = $(document.createElement('option'))
		.attr({"value": "selectText"})
		.appendTo(makeOption)
		.html(category[i])
		.appendTo(chooseCat);
	}				
};
*/

function makeItemLink(key, linkLi){
	var editLink = $(document.createElement('a'));
	editLink.attr("id", "editItem");
	editLink.attr("data-role", "button");
	editLink.attr("data-inline", "true");
	editLink.href = "#additem";
	editLink.key = key;
	var editText = "Edit Item";
	editLink.on('click', function(editItem){});
	editLink.html = editText;
	linkLi.append(editLink);
	
	var deleteLink = $(document.createElement('a'));
	deleteLink.attr("id", "deleteItem");
	deleteLink.attr("data-role", "button");
	deleteLink.attr("data-inline", "true");
	deleteLink.href = "";
	deleteLink.key = key;
	var deleteText = "Delete Item";
	deleteLink.on('click', function(deleteItem){});
	deleteLink.html = deleteText;
	linkLi.append(deleteLink);
	
};

var storeData = function(data, key){
	if(!key){		
		var id = Math.floor(Math.random()*8675309);
	}else{
		id = key;
	}		
	var item					= {};
			item.name			=["Item Name:", $("#name").val()];
			item.cats			=["Category:", $("#cats").val()];
			item.sNumber		=["Serial Number", $("#sNumber").val()];
			item.mNumber		=["Model Number:", $("#mNumber").val()];
			item.condition		=["Condition:", $("input:radio[name=condition]:checked").val()];
			item.date			=["Date:", $("#date").val()];
			item.rCost			=["Replacement Cost:", $("#rCost").val()];
			item.details		=["Details:", $("#details").val()];
		//Save data into local storage: Use Stringify to convert our object to a string.
		localStorage.setItem(id, JSON.stringify(item));
		alert("Item Saved!");
};

	function editItem(){
		//grab the data from the item from local storage
		var val = localStorage.getItem(this.key);
		var item = JSON.parse(val);
		
		//populate the form fields with current localStorage values.
		$('#name').val = (item.name[1]);
		$('#cats').val = (item.cats[1]);
		$('#sNumber').val = (item.sNumber[1]);
		$('#mNumber').val = (item.mNumber[1]);
		$('#date').val = (item.date[1]);	
		$('#rCost').val = (item.rCost[1]);
		$('#details').val = (item.details[1]);
		
		var editSubmit = $('#submit');
			alert("Edited Item Saved!");
			location.reload();
		editSubmit.key = this.key;
			
	function deleteItem(){
		var ask = confirm("Are you sure you want to delete this item?");
		if (ask){
			localStorage.removeItem(this.key);
			window.location.reload();
		}else{
			alert("Item was NOT deleted!");
		}
	};
};	
	function deleteData(){
		var askAll = confirm("WARNING! This will delete ALL inventory items! Press OK to continue.");	
		if(localStorage.length === 0){
			alert("There is no data to clear!");

		}else if(askAll){
			localStorage.clear();
			alert("All Items Have Been Deleted!");
			location.reload();
			return false;
			}else{
				alert("Inventory items were NOT deleted!");
		}
	};


	

