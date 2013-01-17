/*
Patricia Dacosta
ASD 1301
Project 2
main.js
January 17, 2013
*/

/*
**Notes**
ajax calls for static data functioning properly.
CRUD is functioning, however, pages are not loading as expected, nor are listviews for display formatted as expected. 
Form is not refreshing upon save.
Display items are not styled as expected.
Research changepage on jquerymobile.
Need to clean up code, remove page calls that no longer exist.
Work on trying to get data to load to category pages.
*/


//Global Variables


$('#home').on('pageinit', function(){


	//code needed for home page goes here
});	



$('#xhrPage').on('pageinit', function(){
	
});

$('#xmlPage').on('pageinit', function(){
});

$('#xmlDataBtn').on('click', function(){

	$.ajax({
		url:		'xhr/data.xml',
		type:		'GET',
		dataType:	'xml',
		success:	function(response){
		alert("XML request received.");
		$(response).find("item").each(function(){ 

						var name = $(this).find('itemName').text(),
							category = $(this).find('category').text(),
							sNumber = $(this).find('sNumber').text(),
							mNumber = $(this).find('mNumber').text(),
							condition = $(this).find('condition').text(),
							date = $(this).find('date').text(),
							rCost = $(this).find('rCost').text(),
							details = $(this).find('details').text();
						$('<div data-role="content">'+ '<ul data-role="listview">' + 
							'<li>' +
							'<h3>' + 'Item Name: ' + name + '</h3>' +
							'<p>' + 'Category: ' + category + '</p>' +
							'<p>' + 'Serial Number: ' + sNumber + '</p>' +
							'<p>' + 'Model Number: ' + mNumber + '</p>' +
							'<p>' + 'Condition: ' + condition + '</p>' +
							'<p>' + 'Date: ' + date + '</p>' +
							'<p>' + 'Replacement Cost: ' + rCost + '</p>' +
							'<p>' + 'Details: ' + details + '</p>' + 
							'</li>' + '</ul>' + '</div>').appendTo('#xmlData');
			});
			console.log(response);
	}
});
		alert("XML Data Loaded");
});

$('#jsonPage').on("pageinit", function(){
	
});

$('#jsonDataBtn').on("click", function(){
	
		$.ajax({
		url:		'xhr/data.json',
		type:		'GET',
		dataType:	'json',
		success:	function(response){
		alert("JSON Request Received.");
			for (var i in response.items){
				var items = response.items[i];
					
					$('<div data-role="content">'+ '<ul data-role="listview">' + 
						'<li>' +
						'<h3>' + "Item Name: " + items.itemName + '</h3>' +
						'<p>' + "Category: " + items.category + '</p>' +
						'<p>' + "Serial Number: " + items.sNumber + '</p>' +
						'<p>' + "Model Number: " + items.mNumber + '</p>' +
						'<p>' + "Condition: " + items.condition + '</p>' +
						'<p>' + "Date: " + items.date + '</p>' +
						'<p>' + "Replacement Cost: " + items.rCost + '</p>' +
						'<p>' + "Details: " + items.details + '</p>' + 
						'</li>' + '</ul>' + '</div>').appendTo('#jsonData');
			};
			console.log(response);
		}
	
	});
			alert("JSON Data Loaded");

});

$('#csvPage').on("pageinit", function(){
	
});

$('#csvDataBtn').on("click", function(){
	
		$.ajax({
		url:		'xhr/data.csv',
		type:		'GET',
		dataType:	'text',
		success:	function(response){
		alert("CSV Request Received.");
			var csvData = response.split(/\r\n|\n/),
				dataSep = csvData[0].split('|'),
				type = [];
			for(var i=1; i<csvData.length; i++){
				var data = csvData[i].split('|');
				if (data.length == dataSep.length){
					var items = [];
					for (var j=0; j<dataSep.length; j++){
						items.push(data[j]);
					}
					type.push(items);
				}
			}
			for(var k=0; k<type.length; k++){
				var item = type[k];	
								
					$('<div data-role="content">'+ '<ul data-role="listview">' + 
						'<li>' +
						'<h3>' + "Item Name: " + item[0]+ '</h3>' +
						'<p>' + "Category: " + item[1] + '</p>' +
						'<p>' + "Serial Number: " + item[2] + '</p>' +
						'<p>' + "Model Number: " + item[3] + '</p>' +
						'<p>' + "Condition: " + item[4] + '</p>' +
						'<p>' + "Date: " + item[5]+ '</p>' +
						'<p>' + "Replacement Cost: " + item[6] + '</p>' +
						'<p>' + "Details: " + item[7] + '</p>' + 
						'</li>' + '</ul>' + '</div>').appendTo('#csvData');
			};
			console.log(response);
		}
	
	});
			alert("CSV Data Loaded");
			

});






$('#dispAllBtn').on("click", function(){
	getData();
});



$('#delAll').on("click", function(){
	deleteData();
});

/*
('#dispAll').on('pagecreate', function(){

});
*/

$('displayAll').on("pageinit", function(){

});

$('#reset').on("click", function(){
	window.location.reload();
});
$('#electronics').on('pagecreate', function(){

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

		


$('#additem').on('pagecreate', function(){
	createSelect();
});
		
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

var makeItemLink = function(key, linksLi){
	var editLink = $('<a></a>').attr({
			"href": "#additem",
			"id": "editItemBtn",
			"data-role": "button",
			"data-mini": "true",
			"data-inline": "true",
			"key": key			
			})
			.html('Edit Item')
			.appendTo(linksLi).on("click", editItem);
			
	var deleteLink = $('<a></a>').attr({
			"href": "#",
			"id": "deleteItemBtn",
			"data-role": "button",
			"data-mini": "true",
			"data-inline": "true",
			"key": key			
			})
			.html('Delete Item')
			.appendTo(linksLi).on("click", deleteItem);
			
			
};


var autofillData = function (){
	console.log("autofill Fired");
	for (var n in json) {
		var id = Math.floor(Math.random()*8675309);
		localStorage.setItem(id, JSON.stringify(json[n]));
	}
	 
};

var getData = function(id){
	if(localStorage.length === 0){
		autofillData();
	};
	
	for (var i=0, len=localStorage.length; i<len; i++){
		var makeLi = $('<li></li>').attr({
										'id': 'list',
										'data-role': 'listview',
										'data-theme': 'a'}).appendTo('#displayAll');
				
				var key = localStorage.key(i);
				var value = localStorage.getItem(key);
				var obj = JSON.parse(value);
				
				for (var n in obj){
					var makeSubli = $('<p></p>').html(obj[n][0] + "" + obj[n][1]).appendTo(makeLi);
					
				}			
				var linksLi = $('<div></div>').attr('class', 'linksLi').appendTo(makeLi);
				makeItemLink(localStorage.key(i), linksLi);			
		}
		alert("Inventory Retrived");
	};
	
	
	var categories = ["Electronics", "Appliances", "Jewelry", "Collectibles", "Art", "Apparel", "Household", "Tools", "Miscellaneous"];	
	var save = $("#submit")
	
	
	var createSelect = function(){
	
		$('#select').html('<label for="cats">Category: *Required</label><select></select>');
    $('#select select').attr({
            "id": "cats",
            "name": "cats",
            "class": "required select",
            "data-native-menu": "false"
        })
        .append('<option data-placeholder="true" value="" >Choose Category</option>')
    ;
    //Make options for each category
    $.each(categories, function(){
        $('#cats').append('<option value="'+this+'">'+this+'</option>');
    });
    
};



var storeData = function(data, key){
	if(!key){		
		var id = Math.floor(Math.random()*8675309);
	}else{
		id = key;
	}		
	var item					= {};
			item.itemName		=["Item Name:", $("#itemName").val()];
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

var editItem = function(key){
		//grab the data from the item from local storage
		var value = localStorage.getItem($(this).attr('key'));
		var item = $.parseJSON(value);
		
		//populate the form fields with current localStorage values.
		$('#itemName').val(item.itemName[1]);
		$('#cats').val(item.cats[1]);
		$('#sNumber').val(item.sNumber[1]);
		$('#mNumber').val(item.mNumber[1]);
		$('#condition').val(item.condition[1]);
		$('#date').val(item.date[1]);	
		$('#rCost').val(item.rCost[1]);
		$('#details').val(item.details[1]);

		$('#submit').val("Edit Item");
		$('#submit').attr('key', $(this).attr('key'));
		
			alert("Edited Item Saved!");
			/* location.reload(); */
		
};		
			
var deleteItem = function(){
		var ask = confirm("Are you sure you want to delete this item?");
		if (ask === true){
			localStorage.removeItem($(this).attr('key'));
			alert("Inventory Item Deleted");
			window.location.reload();
		}else{
			alert("Item was NOT deleted!");
		}
	};
	
var deleteData = function(){
		var askAll = confirm("WARNING! This will delete ALL inventory items! Press OK to continue.");	
		if(localStorage.length === 0){
			alert("There is no data to clear!");

		}else if(askAll){
			localStorage.clear();
			alert("All Items Have Been Deleted!");
			}else{
			
				alert("Inventory items were NOT deleted!");
			return false;
			


		}
	};


