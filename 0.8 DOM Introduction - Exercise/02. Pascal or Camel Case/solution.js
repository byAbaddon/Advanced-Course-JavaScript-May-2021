function solve() {
  let firstField = document.getElementById('text').value
  let secondField = document.getElementById('naming-convention').value
  let resultField = document.getElementById('result')
  let convertor = firstField.toLowerCase().split(' ').map(x => x[0].toUpperCase() + x.slice(1,)).join('')     

  if (secondField == 'Camel Case') {
    resultField.textContent = convertor[0].toLowerCase() + convertor.slice(1,)
  } else if (secondField == 'Pascal Case') {
    resultField.textContent = convertor
  } else {
    resultField.textContent = 'Error!'
  }

}


//secOND eXamPLE, Pascal Case   = 'SecondExample'
//this is an example, Camel Case
// secOND eXamPLE, Pascal Case
// Invalid Input, Another Case