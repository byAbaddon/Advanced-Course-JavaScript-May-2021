const {assert} = require('chai')
const createCalculator = require('../07. Add and Subtract')


describe('Test Add and Subtract', () => {
  let calc;
  beforeEach(() => {
    calc = createCalculator()
  })

  it('1. Get should return 0', () => {
    assert.equal(calc.get(1), 0)
  })

  it('2. Get should return 0', () => {
    assert.equal(calc.get('a'), 0)
  })

  it('Test method get', () => {
    assert.equal(typeof calc.get, 'function')
  })

  it(`Test method subtract`, () => {
    assert.equal(typeof calc.subtract, 'function')
  })

  it('Should return  is object', () => {
    assert.equal(typeof calc, 'object')
  })

  it('Value to equals undefined', () => {
    assert.equal(calc.value, undefined)
  })

  it('Test add method', () => {
    calc.add('1')
    assert.equal(calc.get(), 1)
  })

  it('Test add method return undefined', () => {
    assert.equal(calc.add(), undefined)
  })


  it('Test subtract method', () => {
    calc.add('2')
    calc.subtract('1')
    assert.equal(calc.get(), 1)
  })

  it('Is returns an object', () => {
    assert.equal(typeof createCalculator(), 'object')
  })

  it('Should cast the string to Number', () => {
    calc.add('1.0')
    calc.add('1.1')
    assert.equal(calc.get(), 2.1)
  })

})