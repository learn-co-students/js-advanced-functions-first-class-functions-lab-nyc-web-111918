// Code your solution in this file!

const returnFirstTwoDrivers = function(drivers){
  return drivers.slice(0,2)
}

const returnLastTwoDrivers = function(drivers){
  return drivers.slice(drivers.length-2)
}

const selectingDrivers = [
  returnFirstTwoDrivers,
  returnLastTwoDrivers
]

function createFareMultiplier (fare){
  return function(multi){
    return fare * multi
  }
}

const fareDoubler = function(fare){
  return fare * 2
}

const fareTripler = function(fare){
  return fare * 3
}

function fetchSpecifiedDrivers(drivers, obj){ 
  return obj(drivers)
}
