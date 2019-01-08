const returnFirstTwoDrivers = function (array){
  return array.slice(0,2);
}

const returnLastTwoDrivers = function(array){
  return array.slice(array.length-2, array.length);
}

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];

const createFareMultiplier = function(multiplier){
  return function (num){
    return num*multiplier;
  }
}

const fareQuintupler = createFareMultiplier(5);

const fareDoubler = createFareMultiplier(2);

const fareTripler = createFareMultiplier(3);

const fetchSpecifiedDrivers= function(drivers, fn){
  return fn(drivers);
}
