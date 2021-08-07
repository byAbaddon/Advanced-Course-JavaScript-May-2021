function addItem() {
    let textF = document.querySelector('#newItemText')
    let valueF = document.querySelector('#newItemValue')
    let menu = document.querySelector('#menu')
    let option = document.createElement('option')
    
    option.textContent = textF.value + ' : ' + valueF.value
    textF.value = ''
    valueF.value = ''

    menu.appendChild(option)
}