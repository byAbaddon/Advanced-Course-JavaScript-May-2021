function lockedProfile() {
    Array.from(document.querySelectorAll('button')).forEach(el => {
        el.addEventListener('click', function () {
            if (!this.parentNode.children[2].checked && this.textContent != 'Hide it') {
                this.textContent = 'Hide it'
                this.previousElementSibling.style = 'display : block'
            } else if (!this.parentNode.children[2].checked) {
                this.textContent = 'Show more'
                this.previousElementSibling.style = 'display : none'
            }
        })
    })
}

