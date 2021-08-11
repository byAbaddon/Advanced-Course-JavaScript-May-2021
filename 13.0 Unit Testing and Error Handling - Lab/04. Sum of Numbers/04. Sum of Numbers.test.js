const {assert} = require('chai')
const sum = require('../04. Sum of Numbers')


describe('Test Sum Function', () => {
    it('Is all of arguments in array is numbers?', () => {
    assert.equal(isNaN(sum([1, 2, 'Rambo'])), true)
    })
  it('Return the sum of the values of all elements inside the array', () => {
    assert.equal(sum([1, 2, ]), 3)
  })
  it('Return the sum of the values of all elements inside the array', () => {
    assert.equal(sum([-1, -2, ]), -3)
  })
  
})
