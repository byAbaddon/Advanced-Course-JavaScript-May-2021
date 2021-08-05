function solve() {
  let text = document.getElementById('input').value
  let output = document.getElementById('output')
  let result = []
  let startPosition = 0

  text = text.split('.').filter(el => el.length > 0)

  for (let i = 0; i < text.length; i++) {
    if (i % 3 == 0) {
       result.push('<p>' + text.slice(startPosition, i) + '.</p>')
      startPosition = i
    }    
  }

  result.push('<p>' + text.slice(startPosition, Infinity) + '.</p>')
  output.innerHTML = result.slice(1,).join('')
}



//-----------------------------------------(2)--------------------------

function solve() {
  let text = document.getElementById('input').value
  let output = document.getElementById('output')

  text = text.split('.').filter(el => el.length > 0)

  for (let i = 0; i < text.length; i += 3) {
    let result = []
    for (let j = 0; j < 3; j++) {
      if (text[i + j]) {
        result.push(text[i + j])
      }
    }

    output.innerHTML += `<p>${result.join('. ') + '.'}</p>`
  }
}





