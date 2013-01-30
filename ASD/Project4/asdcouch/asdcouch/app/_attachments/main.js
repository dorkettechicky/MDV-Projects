/*
Patricia Dacosta
ASD 1301
Project 4
main.js
January 31, 2013
*/

/*
**Notes**


*/





$('#home').on('pageinit', function(){
	$('#allBtn').on('click', function() {getData('items')});
	$('#elecBtn').on('click', function() {getData('electronics')});
	$('#appliBtn').on('click', function() {getData('appliances')});
	$('#jewelryBtn').on('click', function() {getData('jewelry')});
	$('#collBtn').on('click', function() {getData('collectibles')});
	$('#artBtn').on('click', function() {getData('art')});
	$('#apparelBtn').on('click', function() {getData('apparel')});
	$('#hhBtn').on('click', function() {getData('household')});
	$('#toolsBtn').on('click', function() {getData('tools')});
	$('#miscBtn').on('click', function() {getData('miscellaneous')});
	
});	

$('#display').on('pageinit', function(){
	
});

$('#reset').on("click", function(){
	window.location.reload();
});
		
		
$('#additem').on('pageinit', function(){
	$('#submit').click(validate);

});

/*
var autofillData = function (){
	console.log("autofill Fired");
	for (var n in json) {
		var id = Math.floor(Math.random()*8675309);
		localStorage.setItem(id, JSON.stringify(json[n]));
	}
	 
};
*/

var getData = function(key){
	$('#displayData').empty();
	$.couch.db('asdproject').view('app/'+key,{
		success: function(data){
			console.log(data);
			$.each(data.rows, function (index, item){
				var itemName = item.value.itemName;
				var category = item.value.category;
				var sNumber = item.value.sNumber;
				var mNumber = item.value.mNumber;
				var condition = item.value.condition;
				var date = item.value.date;
				var rCost = item.value.rCost;
				var details = item.value.details;
					$('<div data-role="collapsible" data-collapsed="true" data-theme="a">' +
					 	'<h3>' + itemName[1] + '</h3>' +	   					 
						'<p>' + category[0] + " " + category[1] + '</p>' +
						'<p>' + sNumber[0] + " " + sNumber[1] + '</p>' +
						'<p>' + mNumber[0] + " " + mNumber[1] + '</p>' +
						'<p>' + condition[0] + " " + condition[1] + '</p>' +
						'<p>' + date[0] + " " + date[1] + '</p>' +
						'<p>' + rCost[0] + " " + rCost[1] + '</p>' +
						'<p>' + details[0] + " " + details[1] + '</p>' +
						'</div>').appendTo('#displayData')
							.append($('<a>')
								.attr({
									"href": "#",
									"id": "editBtn",
									"class": "btn",
									"data-role": "button",
									"data-mini": "true",
									"data-inline": "true",
									"data-theme":	"a",
									"key": item.id
										}).html('Edit Item').on("click", editItem)
									)
							.append($('<a>')
								.attr({
									"href": "#",
									"id": "deleteBtn",
									"class": "btn",
									"data-role": "button",
									"data-mini": "true",
									"data-inline": "true",
									"data-theme":	"a",
									"key": item.id
										}).html('Delete Item').on("click", deleteItem)
									);
			});
			$('.btn').button();
			$('#displayData').collapsibleset('refresh');						
		},
		 error: function(status) {
			 console.log(status);
		}
	});
	$.mobile.changePage('#display');
};		
	
/*
	var categories = ["Electronics", "Appliances", "Jewelry", "Collectibles", "Art", "Apparel", "Household", "Tools", "Miscellaneous"];	
	var save = $("#submit")
	
	
	var createSelect = function(){
	
		$('#select').html('<label for="category">Category: *Required</label><select></select>');
    $('#select select').attr({
            "id": "category",
            "name": "category",
            "class": "required select",
            "data-native-menu": "false"
        })
        .append('<option data-placeholder="true" value="" >Choose Category</option>')
    ;
    //Make options for each category
    $.each(categories, function(){
        $('#category').append('<option value="'+this+'">'+this+'</option>');
    });
    
};

*/


var storeData = function(key){
	console.log($('#submit').attr('key'));
	var doc = {};
		if(!key || undefined){		
			var id = "item" + ":" + $('#category').val().toLowerCase()+":"+ Math.floor(Math.random()*8675309);
		}else{
			var id = key;
			doc._rev = $('#submit').attr('rev');
		}		
		
			$('#submit').attr('key', id);
				doc._id 			= id;
				doc.itemName		=["Item Name:", $("#itemName").val()];
				doc.category		=["Category:", $("#category").val()];
				doc.sNumber			=["Serial Number", $("#sNumber").val()];
				doc.mNumber			=["Model Number:", $("#mNumber").val()];
				doc.condition		=["Condition:", $("input:radio[name=condition]:checked").val()];
				doc.date			=["Date:", $("#date").val()];
				doc.rCost			=["Replacement Cost:", $("#rCost").val()];
				doc.details			=["Details:", $("#details").val()];
				
			$.couch.db("asdproject").saveDoc(doc, {
				success: function(data){
					alert('Item Added To Inventory!');
					$.mobile.changePage('#display');
				},
				error: function(status) {
					console.log(status);
				}
			});
			//$('#submit').removeAttr('key');
};

var editItem = function(){
		//grab the data from the item from local storage
		$.couch.db('asdproject').openDoc($(this).attr('key'),{
			success: function(data){	
			console.log(data);	
		//populate the form fields with current localStorage values.
		$('#itemName').val(data.itemName[1]);
		$('#category').val(data.category[1]);
		$('#sNumber').val(data.sNumber[1]);
		$('#mNumber').val(data.mNumber[1]);
		$('#condition').val(data.condition[1]);
		$('#date').val(data.date[1]);	
		$('#rCost').val(data.rCost[1]);
		$('#details').val(data.details[1]);

		$('#submit').val('Save Edited Item')
						.attr({
						"key": data._id,
						"rev": data._rev
						});
		console.log(status);
		//alert("Edited Item Saved!");				
		$.mobile.changePage('#additem');

			}

		});
		
};		
var validate = function(){
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


