// let result = (function () {       TODO:...........

//     class Textbox {
//         constructor(selector, reg) {
//             this._elements = Array.from(document.querySelectorAll(selector))
//             this._value = this._elements[0].value
//             this._invalidSymbols = reg
//             this._elements.map(el => el.addEventListener('input', () => this._value = el.value))
//         }

//         get elements() {
//             return this._elements
//         }
//         get value() {
//             return this._value
//         }

//         set value(v) {
//             this._value = v
//             this._elements.map(el => el.value = v)
//         }

//         isValid = () => this._invalidSymbols.exec(this.value) == null
//     }

//     class Form {
//         constructor() {
//             this._textboxes = []
//             this._element = document.createElement('div')
//             this._elements.className = 'from' //`<div class = 'form'></div>`


//             for (let a of arguments) {
//                 if (!(a instanceof Textbox))
//                     throw new Error('Element is not a Textbox')
//             }

//             for (let el of arguments) {
//                 this._element.appendChild(el.selector)
//                 this._textboxes.push(el)
//             }
//         }

//         submit() {
//             for (let el of this._textboxes) {
//                 if (el.isValid()) {
//                     el.selector.style = 'border 2px solid green'
//                     return true
//                 } else {
//                     el.selector.style = 'border 2px solid red'
//                     return false
//                 }
//             }
//         }

//         attach(selector) {
//             this._element.setAttribute(selector)
//         }
//     }

//     return {
//         Textbox: Textbox,
//         Form: Form
//     }
// }())


let Textbox = result.Textbox;
let Form = result.Form;
let username = new Textbox("#username", /[^a-zA-Z0-9]/);
let password = new Textbox("#password", /[^a-zA-Z]/);
username.value = "username";
password.value = "password2";
let form = new Form(username, password);
form.attach("#root");


//--------------------------------------------------

let result =
     
    
 (function () {
    class Textbox {
        constructor(selector, regex) {
            this.selector = selector;
            this._elements = $(selector);
            this._invalidSymbols = regex;
            this._value = '';
 
            let that = this;
            $(selector).on('input change', function () {
                let value = $(this).val();
                $(that.selector).val(value);
                that.value = value;
            });
        }
 
        get elements() { return this._elements }
 
        get value() { return this._value }
        set value(v) {
            this._value = v;
            $(this.selector).val(v);
        }
 
        isValid() { return !this._invalidSymbols.test($(this.selector).val()); }
    }
 
    class Form extends Textbox{
        constructor(...arg) {
            super(selector, regex)
            this.arg = arg
            this._element = $('<div>').addClass('form');
            this._textboxes = [];
            for (let a of arg) {
                if (!(a instanceof Textbox))
                    throw new Error(`Element is not a Textbox`);
            }
            for (let a of arg) {
                this._element.append($(a.selector));
                this._textboxes.push(a);
            }
        }
        submit() {
            for (let tb of this._textboxes) {
                if (tb.isValid()) {
                    $(tb.selector).css('border', '2px solid green');
                } else {
                    $(tb.selector).css('border', '2px solid red');
                }
            }
        }
        attach(selector) {
            $(selector).append(this._element);
        }
    }
 
    return {
        Textbox: Textbox,
        Form: Form
    }
})()
     




 
let Textbox = result.Textbox;
let Form = result.Form;
let username = new Textbox("#username",/[^a-zA-Z0-9]/);
let password = new Textbox("#password",/[^a-zA-Z]/);
username.value = "username";
password.value = "password2";
let form = new Form(username,password);
form.attach("#root");