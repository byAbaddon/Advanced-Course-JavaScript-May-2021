
const {assert} = require('chai')
const rgbToHexColor = require('../14. String Builder')


describe('StringBuilder', () => {
	 let expected;
 		beforeEach(() => {
		 expected = new StringBuilder('Haha')
	})


    it('Should be instance of StringBuilder', () => {
        assert.equal(expected instanceof StringBuilder, true)
    })
    it('Can be instantianated with a passed in string argument', () => {
        expect(expected._stringArray).to.have.lengthOf(4);
    })
    it('testing Prepend to Throw Error', () => {
        expect(() =>expected.append(1)).to.Throw(TypeError)
    })
    it('testing Append string length', () => {
        expected.append('Test')
        expect(expected._stringArray).to.have.lengthOf(8);
    })
    it('testing Append string last index', () => {
        expected.append('Test')
        expect(expected._stringArray[0]).to.be.equal('H')
    })
    it('testing Prepend to Throw Error', () => {
         expect(() =>expected.prepend(1)).to.Throw(TypeError)
    })
    it('testing Prepend string last index', () => {
        expected.prepend('Test')
        expect(expected._stringArray[0]).to.be.equal('T')
    })
    it('testing insertAt with input', () => {
        expected.insertAt('N', 1)
        expect(expected._stringArray[1]).to.be.equal('N')
    })
    it('testing insertAt with input', () => {
        expected.insertAt('N', 1)
        expect(expected._stringArray[1]).to.be.equal('N')
    })
    it('testing insertAt to Throw error', () => {
        expect(() => expected.insertAt(2,1)).to.Throw(TypeError)
    })
    it('testing toString for correct functionality', () => {
          expect(expected.toString()).to.be.equal('Haha')
    })
    it('testing the arguments', () => {
        expect(() => new StringBuilder(5)).to.Throw(TypeError)
    })
    it('testing the arguments', () => {
        expect(() => new StringBuilder(true)).to.Throw(TypeError)
    })
    it("does it have method called _verifyParam", () => {
        assert.equal(StringBuilder.hasOwnProperty("_vrfyParam"), true)
    })
    it("does it have method called _verifyParam", () => {
        let expected = new StringBuilder('haha')
        expected.append(', nope')
        expected.prepend('you wont block me,')
        expected.insertAt('blqblq, 5')
        expected.remove(6, 3)
        assert.equal(expected.toString(), 'blqblqyou wont block me,haha, nope')
    })
})
