//WARNING ERROR IN JUDGE TEST!  INPUT ID MUST BE -> newText  NOT -> newItemText

function addItem() {             //Solution with JQuery
    let field = $('#newText')
    let ul = $('#items')
    ul.append(`<li>${field.val()}<a href="#">[Delete]</a></li>`)

    $('ul li a').on('click', function (e) {
        e.target.parentElement.remove()
    })

}

//------------------------------------------------(2)--------------------------

 function addItem() {
     let input = document.querySelector('#newText')
     let ul = document.querySelector('#items')
     ul.innerHTML += `<li>${input.value}<a href="#">[Delete]</a></li>`
        
     document.querySelector('#items').addEventListener('click', function (e) {
         if (e.target.tagName == 'A') {
             e.target.parentElement.remove()
         }    
     })
     
     input.value = ''
    }


//-------------------------------------------------(3)---------------------------
function addItem() {
    let input = document.getElementById('newText')
    let ul = document.getElementById('items')

    let li = document.createElement('li')
    li.innerHTML = `${input.value} <a href="#">[Delete]</a>`
    ul.appendChild(li)
    input.value = ''

    ul.addEventListener('click', function(e) {
        e.target.parentNode.remove()       
    })
}


