const findTheOldest = function (persons) {
	let newlist = persons.sort((a, b) => {
		return (a.yearOfDeath || 2023) - a.yearOfBirth <
			(b.yearOfDeath || 2023) - b.yearOfBirth
			? 1
			: -1;
	});
	return newlist[0].name;
};

// Do not edit below this line
module.exports = findTheOldest;
