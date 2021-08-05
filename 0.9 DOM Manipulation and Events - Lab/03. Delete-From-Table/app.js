function deleteByEmail() {
    let input = document.querySelector('input').value
    let result = document.getElementById('result')
    let isFound = false

    Array.from(document.querySelectorAll('td:nth-child(2)')).forEach(el => {
        if (el.textContent == input ) {
            el.parentElement.remove()
            result.innerHTML = 'Deleted.'
            isFound = true
        }    
    })

    if (!isFound) result.innerHTML = 'Not found.' 
}