function (doc) {
	if (doc._id.substr(0, 8) === "item:art"){
		emit(doc._id.substr(8), {
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