function validate() {
    let input = document.getElementById('email')
    input.className = 'error'
    
    input.addEventListener('change', function () {
  
        if (/^[a-z]+@[a-z]+\.[a-z]{2,}/g.test(input.value)) {
            input.className = ''
        } else {
            input.className = 'error'
        }
    })
}