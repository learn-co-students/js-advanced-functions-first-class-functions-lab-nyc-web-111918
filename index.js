// Code your solution in this file!
const returnFirstTwoDrivers = (function(drivers) {
  return drivers.slice(0, 2);
})

const returnLastTwoDrivers = (function(drivers) {
  return drivers.slice(drivers.length - 2);
})

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];

const createFareMultiplier = function(n) {
  return function(fare) {
    return n * fare;
  }
}

const fareDoubler = createFareMultiplier(2);

const fareTripler = createFareMultiplier(3);

const fetchSpecifiedDrivers = function(drivers, fn) {
  return fn(drivers);
}
