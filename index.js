// Code your solution in this file!
const returnFirstTwoDrivers = function(drivers) {
// let newArr = [];
  // newArr.push(drivers[0])
  // newArr.push(drivers[1])
  return drivers.slice(0, 2);
  // return newArr;
}

const returnLastTwoDrivers = function(drivers) {
  return drivers.slice(-2);
}

let selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];

let createFareMultiplier = function(int) {
   return function(value){
     return value * int;
   }
 }
const fareDoubler = createFareMultiplier(2);

// const fareTripler = function(int) {
//   return int * 3;
// }

const fareTripler = createFareMultiplier(3);

const fetchSpecifiedDrivers = function(arrayOfDrivers, func) {
return func(arrayOfDrivers)
}
