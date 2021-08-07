function solve() {
  let allSections = document.querySelectorAll('section')
  let points = 0
  let counter = 0
  Array.from(document.querySelectorAll('p')).forEach(btn => {
    btn.addEventListener('click', function (e) {
      if (this.textContent == 'onclick' || this.textContent == 'JSON.stringify()' || this.textContent == 'A programming API for HTML and XML documents') {
        points++
      }
      allSections[counter].style = 'display: none'
      counter++
      if (counter < 3) {
        allSections[counter].style = 'display: block'
      } else {
        document.querySelector('#results').style = 'display : block'
        let result = document.querySelector('#results li h1')
        if (points == 3) {
          result.textContent = 'You are recognized as top JavaScript fan!'
        } else {
          result.textContent = `You have ${points} right answers`
        }
      }
    })
  })
}