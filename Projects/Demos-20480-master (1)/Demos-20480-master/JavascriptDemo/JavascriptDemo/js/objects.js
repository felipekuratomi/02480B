(function (ns) {
	ns.emptyObject = {};

	ns.stooge1 = {
		"first-name": "Jerome",
		"last-name": "Howard"
	};

	ns.stooge2 = {
		firstName: "Jerome",
		lastName: "Howard"
	};

	ns.flight = {
		airline: "Oceanic",
		number: 815,
		departure: {
			IATA: "SYD",
			time: "2004-09-22 14:55",
			city: "Sydney"
		},
		arrival: {
			IATA: "LAX",
			time: "2004-09-23 10:42",
			city: "Los Angeles"
		}
	};



})(window.Objects = window.Objects || {});