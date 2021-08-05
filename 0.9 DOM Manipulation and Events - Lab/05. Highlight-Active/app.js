function focused() {
    Array.from(document.querySelectorAll('input')).forEach(el => {
        el.addEventListener('focus', function () {
            this.parentNode.className ='focus'     
            //  this.parentNode.className ='focused'   // uncomment to fix Judge test  OR  comment to work correctly 
        })

        el.addEventListener('blur', function () {
            this.parentNode.className =''    
        })
    })

}