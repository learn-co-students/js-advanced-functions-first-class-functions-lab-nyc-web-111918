// Code your solution in this file!
const returnFirstTwoDrivers = (function (drivers) {
	return drivers.slice(0, 2)
});

// Code your solution in this file!
const returnLastTwoDrivers = (function (drivers) {
	return drivers.slice(returnFirstTwoDrivers(drivers).length, drivers.length)
});

const selectingDrivers = [
	returnFirstTwoDrivers,
	returnLastTwoDrivers
]

const createFareMultiplier = function (multiplier) {
	return function (num) {
		return num * multiplier;
	};
};

const fareDoubler = function (fare) {
	return fare * 2;
}

const fareTripler = function (fare) {
	return fare * 3;
}

function fetchSpecifiedDrivers(arrayOfDrivers, selector) {
  if (selectingDrivers[0] == selector) {
    return selectingDrivers[0](arrayOfDrivers)
  }
  else {
    return selectingDrivers[1](arrayOfDrivers)
  }
}
