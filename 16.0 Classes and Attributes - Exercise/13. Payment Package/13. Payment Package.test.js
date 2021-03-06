let assert = require("chai").assert;
let PaymentPackage = require("../13. Payment Package");

describe("Tests …", () => {
    const inputTests = [
        ['Partnership', 'asd', Error, 'Value must be a non-negative number'],
        ['Partnership', -70, Error, 'Value must be a non-negative number'],
        ['', '70', Error, 'Name must be a non-empty string'],
    ];
    const vatTests = [
        ['asd', Error, 'VAT must be a non-negative number'],
        [-2, Error, 'VAT must be a non-negative number'],
    ]
    const activeTests = [
        ['asd', Error, 'Active status must be a boolean'],
        [-2, Error, 'Active status must be a boolean'],
    ]
    let obj
    beforeEach(() => obj = new PaymentPackage('HR Services', 1500))
    inputTests.forEach(([x, y, err, msg]) =>
        it(`Test ${x}`, () => assert.throw(() => new PaymentPackage(x, y), err, msg)))

    vatTests.forEach(([x, err, msg]) =>
        it(`Test ${x}`, () => assert.throw(() => obj.VAT = x, err, msg)))

    activeTests.forEach(([x, err, msg]) =>
        it(`Test ${x}`, () => assert.throw(() => obj.active = x, err, msg)))

    it('Testing active true', () => {
        assert.equal(obj.active, true)
    })

    it('Testing toString', () => {
        assert.equal(obj.toString(), 'Package: HR Services\n- Value (excl. VAT): 1500\n- Value (VAT 20%): 1800')
    })
    it('Testing toString', () => {
        obj.active = false
        obj.VAT = 50
        assert.equal(obj.toString(), 'Package: HR Services (inactive)\n- Value (excl. VAT): 1500\n- Value (VAT 50%): 2250')
    })
    it('Testing toString', () => {
        obj = new PaymentPackage('HR Services', 0)
        obj.VAT = 0
        assert.equal(obj.toString(), 'Package: HR Services\n- Value (excl. VAT): 0\n- Value (VAT 0%): 0')
    })
})
