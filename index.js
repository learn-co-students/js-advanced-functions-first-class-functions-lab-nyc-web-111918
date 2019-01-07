// Code your solution in this file!
const returnFirstTwoDrivers = function(drivers){
  return drivers.slice(0,2)
}

const returnLastTwoDrivers = function(drivers){
  return drivers.slice(-2)
}

const selectingDrivers = [
  returnFirstTwoDrivers,
  returnLastTwoDrivers
]

const createFareMultiplier = function (integer){
  return function(fare){
    // debugger;
    return fare * integer
  }
}

const fareDoubler = createFareMultiplier(2)

const fareTripler = createFareMultiplier(3)

// function addtoArray (drivers) {
//   drivers.push("1")
// }

const fetchSpecifiedDrivers = function (drivers, randomFunc){
  //debugger;
  return randomFunc(drivers)
}

// //Make pastry
//
// // function bakeAPizza(baker){
// //   return `${baker} made a pizza!`
// // }
// //
// // function bakeAPie(baker){
// //   return `${baker} made a pie!`
// // }
//
// function bakeSomething(baker, recipe){
//   return recipe(baker)
// }
//
// bakeSomething("Emily", bakeAPie)
// => "Emily made a pie!"
