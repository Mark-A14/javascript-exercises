const add = function (num1, num2) {
	return num1 + num2;
};

const subtract = function (num1, num2) {
	return num1 - num2;
};

const sum = function (numArray) {
	let result = 0;
	for (i in numArray) {
		result = numArray[i] + result;
	}
	return result;
};

const multiply = function (numArray) {
	let result = 1;
	for (i in numArray) {
		result = numArray[i] * result;
	}
	return result;
};

const power = function (base, exponent) {
	return base ** exponent;
};

const factorial = function (num) {
	let result = 1;
	for (let i = 1; i < num + 1; i++) {
		result = result * i;
	}
	return result;
};

// Do not edit below this line
module.exports = {
	add,
	subtract,
	sum,
	multiply,
	power,
	factorial,
};
