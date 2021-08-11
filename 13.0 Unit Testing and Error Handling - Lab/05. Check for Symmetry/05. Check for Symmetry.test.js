const {expect } = require('chai')
const isSymmetric = require('../05. Check for Symmetry')

describe('Check for Symmetry', () => {
  it('Take an array as argument', () => {
    expect(isSymmetric([])).to.equal(true)  
  })
  it('Take an array as argument', () => {
    expect(isSymmetric([0,0])).to.equal(true)  
  })
  it('Return false for any input that isn’t of the correct type', () => {
    expect(isSymmetric([1, 0])).to.equal(false)   
  })
  it('Return true if the input array is symmetric', () => {
    expect(isSymmetric([1, 1])).to.equal(true) 
  })

  it('Return true if the input array is symmetric', () => {
    expect(isSymmetric([1, 1, 1])).to.equal(true) 
  })

  it('Otherwise, return false1', () => {
    expect(isSymmetric('')).to.equal(false) 
  })

  it('Otherwise, return false2', () => {
    expect(isSymmetric([1, 'Rambo'])).to.equal(false)  
  })
  it('Otherwise, return false3', () => {
    expect(isSymmetric(['1', 1])).to.equal(false)  
  })
 
})
