function solve() {
    let displayMovie = document.querySelector('#movies ul')
    let archive = document.querySelector('#archive ul')
    archive.nextElementSibling.addEventListener('click', () => archive.innerHTML = null)  // clear archive
    document.querySelector('button').addEventListener('click', addMovieOnScreen)
 
    function addMovieOnScreen(e) {
        e.preventDefault()
        let [name, hall, price] = document.querySelectorAll('#container input')
 
        if (name.value && hall.value && Number(price.value) || price.value === '0') {
 
            displayMovie.innerHTML +=
                `<li>
                    <span>${name.value}</span>
                    <strong>Hall: ${hall.value}</strong>
                    <div>
                      <strong>${price.value}</strong>
                      <input placeholder="Tickets Sold">
                      <button>Archive</button>
                    </div>
                </li>`
 
            name.value = hall.value = price.value = null
 
        }
 
        Array.from(displayMovie.querySelectorAll('button')).forEach(btn => btn.addEventListener('click', addToArchive))
 
        function addToArchive(btn) {
 
            let ticketPrice = btn.target.parentNode.children[0]
            let ticketsSold = btn.target.parentNode.children[1]
 
            if (Number(ticketsSold.value) || ticketsSold.value === '0') {
 
                archive.innerHTML +=
                    `<li>
                        <span>${btn.target.parentNode.parentNode.children[0].textContent}</span>
                        <strong>Total amount: ${(ticketPrice.textContent * ticketsSold.value).toFixed(2)}</strong>
                        <button>Delete</button>
                    </li>`
 
                btn.target.parentNode.parentNode.remove(); // remove movie from screen
                Array.from(archive.querySelectorAll('button')).forEach(btn => btn.addEventListener('click', (btn) => btn.target.parentNode.remove())) // remove  movie from archive
 
            }
        }
    }
}

//---------------------------------------------(2)-------------------------todo 77points


function solve() {

    let [name, hall, price, btnAdd] = Array.from(document.getElementById('container').children)
    btnAdd.addEventListener('click', function (event) {
        event.preventDefault()
     
        if (name.value && hall.value && parseInt(price.value)) {
            document.querySelector('#movies ul').innerHTML +=
                `<li>
                        <span>${name.value}</span>
                        <strong>Hall: ${hall.value}</strong>
                        <div>
                            <strong>${Number(price.value).toFixed(2)}</strong>
                            <input placeholder="Tickets Sold">
                            <button>Archive</button>
                        </div>
                   </li>`
            
            Array.from(document.querySelectorAll('#container input')).map(el => el.value = '')

            //---------------------- section 2
           let [priceOfTickets, numberOfSoldTickets, btnArh] = Array.from(document.querySelector('#movies ul div').children) // [strong, input, btn]
         
            
            btnArh.addEventListener('click', function (e) {
                let currentMovieName = e.currentTarget.parentNode.parentNode.querySelector('span').textContent
                    if (Number(numberOfSoldTickets.value)) {
                        document.querySelector('#archive ul').innerHTML +=
                            `<li>
                        <span>${currentMovieName}</span>
                        <strong>Total amount: ${(Number(priceOfTickets.textContent) * numberOfSoldTickets.value).toFixed(2)}</strong>
                        <button>Delete</button>
                    </li>`
                        this.parentNode.parentNode.remove()
                }
            })
                
    
            //------------------ section 3   

            Array.from(document.querySelector('#archive ul').querySelectorAll('button'))
                .forEach(btn => btn.addEventListener('click', (btn) => btn.target.parentNode.remove())) // remove  movie from archive
            
              
            document.querySelector('#archive button').addEventListener('click', function () {
                        Array.from(document.querySelectorAll('#archive ul li')).map(el => el.remove())   // clear all archive     
                })
         
        } 
    })
}