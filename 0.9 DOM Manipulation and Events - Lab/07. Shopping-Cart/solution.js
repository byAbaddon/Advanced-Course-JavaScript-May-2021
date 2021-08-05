function solve() {
   let btnAdd = document.getElementsByClassName('product-add')
   let textarea = document.querySelector('textarea')
   let btnCheckOut = document.querySelector('.checkout')
   let productsArr = new Set()


   let totalSum = 0
   textarea.value = ''
   Array.from(btnAdd).forEach(el => {
      el.addEventListener('click', function (e) {
         let product = this.previousElementSibling.childNodes[1].textContent
         productsArr.add(product)
         let price = Number(this.nextElementSibling.textContent)
         totalSum += price
         textarea.value += `Added ${product} for ${price.toFixed(2)} to the cart.\n`

      })
   })

   btnCheckOut.addEventListener('click', function (e) {
      textarea.value += `You bought ${Array.from(productsArr).join(', ')} for ${totalSum.toFixed(2)}.`
      Array.from(document.querySelectorAll('button')).map(x => (x.disabled = 'true'))
   })

}