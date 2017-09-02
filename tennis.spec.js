//const tennis = require('./tennis')

test('tennis', () => {
  //arrange
  let score = 'reset'

  //act
  let result = tennis(score)

  //assert
  expect(result).toBe('love love')
})
