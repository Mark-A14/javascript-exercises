const palindromes = function (string) {
	let punctuations = /[\.,?!\s]/g;
	string = string.replace(punctuations, "").toLowerCase();
	let backwardIndex = string.length - 1;
	for (let i = 0; i < string.length; i++) {
		if (string[i] !== string[backwardIndex]) {
			return false;
		}
		backwardIndex -= 1;
	}
	return true;
};

// Do not edit below this line
module.exports = palindromes;
