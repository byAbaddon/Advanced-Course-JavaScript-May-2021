const {assert} = require('chai')
const rgbToHexColor = require('../06. RGB to Hex')


describe('Test rgbToHexColor Function', () => {
  it('Take three integer numbers, representing the red, green and blue values of an RGB color, each within range [0…255]', () => {
    assert.equal(rgbToHexColor(10, 10, 10), '#0A0A0A')
  })
  it(`Take three integer numbers, -> #FF9EAA`, () => {
    assert.equal(rgbToHexColor(255, 158, 170), '#FF9EAA')
  })
  it('1. Take three integer numbers, expect -> undefined', () => {
    assert.equal(rgbToHexColor(255, 255, -255), undefined)
  })
  it('2. Take three integer numbers, expect -> undefined', () => {
    assert.equal(rgbToHexColor(-1, 255, -255), undefined)
  })
  it('3. Take three integer numbers, expect -> undefined', () => {
    assert.equal(rgbToHexColor(255, -1, -255), undefined)
  })
  it('4. Take three integer numbers, expect -> undefined', () => {
    assert.equal(rgbToHexColor(255, 255, -1), undefined)
  })
  it('5. Take three integer numbers, expect -> undefined', () => {
    assert.equal(rgbToHexColor('a', 255, -255), undefined)
  })
  it('6. Take three integer numbers, expect -> undefined', () => {
    assert.equal(rgbToHexColor(), undefined)
  })
  it('7. Take three integer numbers, expect -> undefined', () => {
    assert.equal(rgbToHexColor(777,1,1), undefined)
  })

  it('Take three integer numbers, expect -> #000000', () => {
    assert.equal(rgbToHexColor(0, 0, 0), '#000000')
  })

})