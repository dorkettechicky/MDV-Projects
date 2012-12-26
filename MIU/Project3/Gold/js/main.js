$('#home').on('pageinit', function(){
	//code needed for home page goes here
});	
		
$('#additem').on('pageinit', function(){
	/* save.click(validate); */

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
	 
};

var getData = function(){

};

var storeData = function(data, key){
	if(!key){		
		var id = Math.floor(Math.random()*8675309);
	}else{
		id = key;
	}		
	var item				= {};
			item.name			=["Item Name:", $("#name").val()];
			item.cats			=["Category:", $("#cats").val()];
			item.sNumber		=["Serial Number", $("#sNumber").val()];
			item.mNumber		=["Model Number:", $("#mNumber").val()];
			item.condition		=["Condition:", $("input:radio[name=condition]:checked").val()];
			item.date			=["Date:", $("#date").val()];
			item.quantity		=["Item Quantity:", $("#quantity").val()];
			item.forSale		=["Is Item For Sale?", $("#forSale").val()];

			item.details		=["Details:", $("#details").val()];
		//Save data into local storage: Use Stringify to convert our object to a string.
		localStorage.setItem(id, JSON.stringify(item));
		alert("Item Saved!");
};
 

var	deleteItem = function (){
			
};
					
var clearLocal = function(){

};

