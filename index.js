// Code your solution in this file!
const returnFirstTwoDrivers = function (drivers){
  return drivers.slice(0, 2)

}

const returnLastTwoDrivers = function (drivers){
  return drivers.slice(drivers.length - 2, drivers.length)
}

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers]

function createFareMultiplier(fair){
  const fareMultiplier = function(num){
    return fair * num
  }
  return fareMultiplier
}

const fareDoubler = createFareMultiplier(2)

const fareTripler = createFareMultiplier(3)

function fetchSpecifiedDrivers(arrayOfDrivers, func){
  return func(arrayOfDrivers)
}
