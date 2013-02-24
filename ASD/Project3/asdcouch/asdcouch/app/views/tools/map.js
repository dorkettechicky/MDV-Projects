function (doc) {
	if (doc._id.substr(0, 10) === "item:tools"){
		emit(doc._id.substr(10), {
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