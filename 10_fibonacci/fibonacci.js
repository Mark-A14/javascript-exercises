const fibonacci = function (fibPlace) {
	fibPlace = parseInt(fibPlace, 10);
	if (fibPlace == -1 || fibPlace < 1) {
		return "OOPS";
	}
	let prevFib = 0;
	let fibTotal = 0;
	let nextFib = 1;
	for (let i = 0; i < fibPlace; ++i) {
		fibTotal = nextFib + prevFib;
		prevFib = nextFib;
		nextFib = fibTotal;
	}
	return prevFib;
};

// Do not edit below this line
module.exports = fibonacci;
