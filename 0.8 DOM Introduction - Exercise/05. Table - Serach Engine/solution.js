function solve() {
   document.querySelector('#searchBtn').addEventListener('click', onClick);
   let search = document.getElementById('searchField')
   let allFields = [...document.querySelectorAll('td')]
   let allRows = [...document.querySelectorAll('tr')]
  
   function onClick() {
      allRows.map(tr => tr.classList.remove('select'))
      allFields.forEach(el => {
         if (el.textContent.includes(search.value)) {
            el.parentNode.className = 'select'
         }
      })

      search.value = ''
   }
}