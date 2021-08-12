const isOddOrEven = require('../02. Even Or Odd')
const { assert } = require('chai')


describe('Test isOddOrEven function', () => {
  it('Is undefined', () => {
    assert.equal(isOddOrEven(1), undefined)
  })
  it('Is odd', () => {
    assert.equal(isOddOrEven('odd'), 'odd')
  })
  it('Is even', () => {
    assert.equal(isOddOrEven('even'), 'even')
  })
})