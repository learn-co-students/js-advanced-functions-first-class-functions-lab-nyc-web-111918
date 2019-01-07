// Code your solution in this file!
// function returnFirstTwoDrivers(){
//   let newArr = [];
//   const func = function (drivers) { newArr = drivers.slice(-2)};
//   return newArr;
// }

const returnFirstTwoDrivers = function (drivers) {return drivers.slice(0,2)};

const returnLastTwoDrivers = function (drivers) {return drivers.slice(-2)};

let selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];

const createFareMultiplier = function(multiplier){
    return function(fare){
      return fare * multiplier;
    }
}

const fareDoubler = createFareMultiplier(2);

const fareTripler = createFareMultiplier(3);

function fetchSpecifiedDrivers(drivers, func){
    return func(drivers);
}
