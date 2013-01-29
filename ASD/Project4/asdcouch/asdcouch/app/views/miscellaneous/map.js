function (doc) {
	if (doc._id.substr(0, 18) === "item:miscellaneous"){
		emit(doc._id.substr(18), {
			"itemName": doc.itemName,
			"category": doc.category,
			"sNumber": doc.sNumber,
			"mNumber": doc.mNumber,
			"condition": doc.condition,
			"date": doc.date,
			"rCost": doc.rCost,
			"details": doc.details
		});
	}
};