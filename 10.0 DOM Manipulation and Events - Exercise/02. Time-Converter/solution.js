function attachEventsListeners() {
  
    Array.from(document.querySelectorAll('input[type="button"]')).forEach(el => {
        el.addEventListener('click', function () {
            let title = this.parentElement.children[0].textContent.slice(0, -2)
            let input = Number(this.previousElementSibling.value)
            let d = h = m = s = 0

            if (title == 'Days') {
                d = input; h = input * 24; m = h * 60; s = m * 60
            } else if (title == 'Hours') {
                d = input / 24; h = input; m = h * 60; s = m * 60
            } else if (title == 'Minutes') {
                h = input / 60; m = input; s = m * 60; d = h / 24
            } else {
                s = input; m = s / 60; h = m / 60; d = h / 24
            }

            document.querySelector('#days').value = d
            document.querySelector('#hours').value = h
            document.querySelector('#minutes').value = m
            document.querySelector('#seconds').value = s
        })
    })
}