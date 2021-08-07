function create(words) {
   let content = document.getElementById('content')
   for (const section of words) {
      content.innerHTML += `<div><p style="display: none">${section}</p></div>`
   }

   Array.from(document.querySelectorAll('div')).forEach(el => {
      el.addEventListener('click', function (e) {
         e.target.children[0].style = 'display : block'
      })
   })
}