/// <reference path="C:\GitHub\Demos-20480\JavascriptDemo\JavascriptDemo\Scripts/qunit-1.14.0.js" />


test("Variável undefined", function () {
	var x;
	equal(typeof x, "undefined");

	x = 1;
	equal(typeof x, "number");
});
