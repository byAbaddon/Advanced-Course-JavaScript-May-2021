function colorize() {
    let list = document.querySelectorAll('tr')
  
    for (let i = 1; i < list.length; i++) {
      if (i & 1) {
        list[i].style.backgroundColor = "teal"
      }
    }
}