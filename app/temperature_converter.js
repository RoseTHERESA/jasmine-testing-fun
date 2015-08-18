module.exports = {
	celsius_to_kelvin: function(temp){
	return (temp + 273.15);
	},

	kelvin_to_celsius: function(temp){
	return (temp - 273.15);
	},

	kelvin_to_fahrenheit: function(temp){
	return ((temp - 273.15) * 1.8) + 32;
	},

	celsius_to_fahrenheit: function(temp){
	return (temp * 1.8) + 32;
	},

	fahrenheit_to_celsius: function(temp){
	return (temp - 32)/1.8;
	},

	fahrenheit_to_kelvin: function(temp){
	return (temp - 32)/1.8 + 273.15;
	}
};