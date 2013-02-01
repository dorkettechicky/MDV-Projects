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

$('#displayData').on('pageinit', function(){

});


$('#reset').on("click", function(){
	window.location.reload();
});

$('#additem').on('pageinit', function(){
	$('#submit').on("click", function(){
		storeData();

	});	

});

$('#delAll').on("click", function(){
	deleteData();
});



$('#editBtn').on("click", function(){
	editItem();
});

$('#deleteBtn').on("click", function(){
	deleteItem();
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



	var storeData = function(key){
	console.log("storeData fired");
	var doc = {};
		if(!key){		
			var id = 'item:' + $('#category').val() + ':' + Math.floor(Math.random()*8675309);
		}else{
			var id = key;
			doc._rev = $('#submit').attr('rev');
		}		

			$('#submit').attr('key', id);
			console.log(id);
				doc._id 			= id;
				doc.itemName		=["Item Name:", $("#itemName").val()];
				doc.category		=["Category:", $("#category").val()];
				doc.sNumber			=["Serial Number", $("#sNumber").val()];
				doc.mNumber			=["Model Number:", $("#mNumber").val()];
				doc.condition		=["Condition:", $("input:radio[name=condition]:checked").val()];
				doc.date			=["Date:", $("#date").val()];
				doc.rCost			=["Replacement Cost:", $("#rCost").val()];
				doc.details			=["Details:", $("#details").val()];

			$.couch.db('asdproject').saveDoc(doc, {
				success: function(data){
				console.log(data);
					alert('Item Added To Inventory!');
					getData('items');
										

					
					


				}
				
				
			});
					
					$('#submit').removeAttr('key');


	};

/*
	var validate = function(){
	var addItemForm = $("addItemForm");
		addItemForm.validate({
			invalidHandler: function(form, validator){},
			submitHandler: function(form){
				storeData($('#submit').attr('key'));
				$('#reset').trigger('click');
			}
		});



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

		$.mobile.changePage('#additem');
			}

		});

};		




var deleteItem = function(){
		var ask = confirm("Are you sure you want to delete this item?");
		if (ask === true){
			$.couch.db('asdproject').openDoc($(this).attr('key'),{
				success: function(data) {
					console.log(data);
					var doc = {};
					doc._id = data._id;
					doc._rev = data._rev;
					$.couch.db('asdproject').removeDoc(doc, {
						success: function(data){
							console.log(data);
							alert('Inventory Item Deleted');
						},
						error: function(status){
							console.log(status);
						}
					});
				}
			});
			$(this).parent().parent().remove();
		}
};	
var deleteData = function(){
		var askAll = confirm("WARNING! This will delete ALL inventory items! Press OK to continue.");	
		if(askAll === true){
			$.couch.db('asdproject').view('asdproject/items', {
				success: function(data){
					var docs = [];
					$.each(data.rows, function(index, item){
						var doc = {};
						doc._id = item.value._id;
						doc._rev = item.value._rev;
						docs.push(doc);
					});
					console.log(docs);
					$.couch.db('asdproject').bulkRemove({"docs":docs},{
						success: function(data){
							console.log(data);
							alert('Inventory has been emptied!');
						},
						error: function(status){
							console.log(status);
						}
					});
				}
			});
		}		
};


