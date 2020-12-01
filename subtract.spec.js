// const { subtract } = require('./subtract.js')
// const subtract = require('./subtract.js')
const { subtract } = require('./subtract')
// const subtract = require('./subtract')

test('should return the difference', () => {
  const difference = subtract(2, 1)
//   expect(subtract(2, 1)).toBe(1)
  expect(difference).toBe(1)
})
