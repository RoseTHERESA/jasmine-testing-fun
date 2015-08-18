var temp_converter = require("../app/temperature_converter.js");


describe("#fahrenheit_to_celsius", function(){
	it("converts 100 fahrenheit to celsius", function(){
		//setup
		var fahrenheit = 100;

		//execution
		var result = temp_converter.fahrenheit_to_celsius(fahrenheit);

		//check the result (with expecter and matcher)
		expect(result).toBeCloseTo(37.778,3);
	});

	it("converts 200 fahrenheit to celsius", function(){
		var fahrenheit = 200;

		var result2 = temp_converter.fahrenheit_to_celsius(fahrenheit);

		expect(result2).toBeCloseTo(93.333,3);
	});

});

describe("#celsius_to_fahrenheit", function(){
	it("converts 100 celsius to fahrenheit", function(){
		var celsius = 100;

		var result = temp_converter.celsius_to_fahrenheit(celsius);

		expect(result).toBe(212);
	});
});

describe("#celsius_to_kelvin", function(){
	it("converts 100 celsius to kelvin", function(){
		var celsius = 100;

		var result = temp_converter.celsius_to_kelvin(celsius);

		expect(result).toBe(373.15);
	});
});

describe("#kelvin_to_celsius", function(){
	it("converts 500 kelvin to celsius", function(){
		var kelvin = 500;

		var result = temp_converter.kelvin_to_celsius(kelvin);

		expect(result).toBeCloseTo(226.85, 3);
	});
});

describe("#kelvin_to_fahrenheit", function(){
	it("converts 500 kelvin to fahrenheit", function(){
		var kelvin = 500;

		var result = temp_converter.kelvin_to_fahrenheit(kelvin);

		expect(result).toBeCloseTo(440.33, 2);
	});
});

describe("#fahrenheit_to_kelvin", function(){
	it("converts 100 fahrenheit to kelvin", function(){
		var fahrenheit = 500;

		var result = temp_converter.fahrenheit_to_kelvin(fahrenheit);

		expect(result).toBeCloseTo(533.15, 3);
	});
});


