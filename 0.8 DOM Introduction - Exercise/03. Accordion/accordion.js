function toggle() {
    let bnt = document.getElementById('extra')
    let changeBtnText = document.getElementsByTagName('span')[0]

    if ( bnt.style.display === 'none') {
        changeBtnText.textContent = 'Less'
        bnt.style.display = 'block'
      } else {
          changeBtnText.textContent = 'More'
          bnt.style.display = 'none'
      }
}