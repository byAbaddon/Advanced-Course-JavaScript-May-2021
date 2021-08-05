function search() {
   let list = document.querySelectorAll('li')
   let searchField = document.getElementById('searchText').value
   let result = document.getElementById('result')
   let counter = 0

   Array.from(list).map(x => {
      if (x.textContent.includes(searchField)) {
         x = x.style.textDecoration = "bold underline" //Judge solution
         counter++
      }
   })

   result.textContent = `${counter} matches found`
}