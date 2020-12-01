// Declare as an arrow function:
const subtract = (a, b) => {
  return a - b
}

// Standart way:
// function subtract(a, b) {
//   return a - b
// }

// Exports

// Export just one function in this case:
// module.exports = subtract

// Export one or more things as an object:
// module.subtract = subtract
module.exports = { subtract }
