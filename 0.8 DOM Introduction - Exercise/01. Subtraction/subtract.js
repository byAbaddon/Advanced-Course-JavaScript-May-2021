function subtract() {
    let firstField = document.getElementById('firstNumber').value
    let secondField = document.getElementById('secondNumber').value
    let result = document.getElementById('result').textContent = +firstField - +secondField
}