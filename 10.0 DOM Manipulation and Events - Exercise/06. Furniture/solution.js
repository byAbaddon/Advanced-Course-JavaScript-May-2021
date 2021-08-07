function solve() {
  const html = {
    inputTextarea: document.querySelectorAll('textarea')[0],
    outputTextarea: document.querySelectorAll('textarea')[1],
    bntGenerate: document.querySelectorAll('button')[0],
    btnBuy: document.querySelectorAll('button')[1],
    tBody: document.querySelector('tbody'),
  }

  html.bntGenerate.addEventListener('click', function () {
     JSON.parse(html.inputTextarea.value).forEach(function (el) {
      html.tBody.innerHTML +=`<td><img src=${el.img}></td>
      <td><p>${el.name}</p></td>
      <td><p>${el.price}</p></td>
      <td><p>${el.decFactor}</p></td>
      <td><input type="checkbox"/></td>`
     })
    
  })


  html.btnBuy.addEventListener('click', function () {
    html.outputTextarea.value = ''
    let totalPrice = 0
    let averages = 0
    let averageCount = 0
    let goods = []

    Array.from(document.querySelectorAll('input[type=checkbox]:checked')).forEach(el => {
      if (el.checked === true) {
        goods.push(el.parentNode.parentNode.children[1].textContent)
        totalPrice += Number(el.parentNode.parentNode.children[2].textContent)
        averages += Number(el.parentNode.parentNode.children[3].textContent)
        averageCount++
      }
    })

    html.outputTextarea.value = (`Bought furniture: ${goods.join(', ')}\nTotal price: ${totalPrice.toFixed(2)}\nAverage decoration factor: ${averages /averageCount }`) 
 
  })
}