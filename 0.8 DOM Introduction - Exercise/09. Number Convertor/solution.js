function solve() {
    let result = document.querySelector('#result')
    let numberField = document.querySelector('#input')
    let selectMenu = document.querySelector('#selectMenuTo')
    selectMenu.innerHTML = `<option selected value="hexadecimal">Hexadecimal</option>\n<option selected value="binary">Binary</option>`
    document.querySelector('button').addEventListener('click', function () {
        if (selectMenu.value == 'binary')
            result.value = Number(numberField.value).toString(2)
        else
            result.value = Number(numberField.value).toString(16).toUpperCase()
    })
}