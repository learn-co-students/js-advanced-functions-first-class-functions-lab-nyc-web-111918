// Code your solution in this file!
const returnFirstTwoDrivers = function returnFirstTwoDrivers(drivers) {
  return drivers.filter(function (driver){
    return driver === drivers[0] || driver === drivers[1];
  })
}

const returnLastTwoDrivers = function returnLastTwoDrivers(drivers) {
  return drivers.filter(function (driver){
    return driver === drivers[drivers.length-1] || driver === drivers[drivers.length-2];
  })

}
const selectingDrivers = [returnFirstTwoDrivers,returnLastTwoDrivers];

function createFareMultiplier(outerNum) {
  return function(n) {
    return outerNum * n
  }
}

const fareDoubler = createFareMultiplier(2);
const fareTripler = createFareMultiplier(3);

function fetchSpecifiedDrivers(drivers, cb){
  return cb(drivers);
}
