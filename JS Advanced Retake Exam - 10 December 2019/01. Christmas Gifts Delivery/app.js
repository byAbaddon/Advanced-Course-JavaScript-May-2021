function solution() {
    const allSection = [...document.querySelectorAll('section')]
    const html = {
        input : allSection[0].querySelector('input'),
        sec1 : allSection[1].querySelector('ul'),
        sec2 : allSection[2].querySelector('ul'),
        sec3 : allSection[3].querySelector('ul'),
        btnAdd : document.querySelector('button'),
    }

    function liFactory(secNum, crBtn, text) {
        let li = document.createElement('li')
        li.className = 'gift'
        li.innerHTML = crBtn
            ? `${html.input.value}<button id="sendButton">Send</button><button id="discardButton">Discard</button>`
            : text

        secNum.appendChild(li)  
   }
 
    html.btnAdd.addEventListener('click', function (e) {
       if (!html.input.value) return 
       liFactory(html.sec1, true)

      Array.from(html.sec1.querySelectorAll('li'))
       .sort((a, b) => a.textContent.localeCompare(b.textContent))  
       .forEach(li => li.parentNode.appendChild(li))
       
      html.input.value = ''
   })
    
    html.sec1.addEventListener('click', function (e) {
         if (e.target.tagName == 'BUTTON') {
             if (e.target.textContent == 'Send') 
                 liFactory(html.sec2, false, e.target.previousSibling.textContent)
             else
                 liFactory(html.sec3, false, e.target.previousSibling.previousSibling.textContent)
             
             e.target.parentNode.remove()
         }
     })
    
}