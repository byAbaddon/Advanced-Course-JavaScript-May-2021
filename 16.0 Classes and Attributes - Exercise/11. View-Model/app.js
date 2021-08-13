class Textbox {
    constructor(selector, reg) {
        this._elements = Array.from(document.querySelectorAll(selector))
        this._value = this._elements[0].value
        this._invalidSymbols = reg
        this._elements.map(el => el.addEventListener('input', () => this._value = el.value))
    }

    get elements() {return this._elements}
    get value() {return this._value}

    set value(v) {
        this._value = v
        this._elements.map(el => el.value = v)
    }

    isValid = () => this._invalidSymbols.exec(this.value) == null
}



// let textbox = new Textbox('Joro', /[^a-zA-Z0-9]/)
// let inputs = document.querySelectorAll('.textbox')
// inputs.forEach(x => x.addEventListener('input', function () {
//     console.log(x.value)
// }))
