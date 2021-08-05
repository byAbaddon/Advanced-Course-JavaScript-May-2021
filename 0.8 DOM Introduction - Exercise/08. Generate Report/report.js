function generateReport() {
    let checkedHeaderColumn = document.querySelectorAll('thead tr th')
    let column = document.querySelectorAll('tbody tr')
    let result = document.getElementById('output')
    let collectionArr = []
    let currentObj = {}

    Array.from(column).forEach(row => {
        Array.from(checkedHeaderColumn).forEach((el, index) => {
            if (el.children[0].checked) {
                let tableData = el.textContent[0].toLowerCase().concat(el.textContent.slice(1, )).trim()
                currentObj[tableData] = row.children[index].textContent
            }
        })
        collectionArr.push(currentObj)
        currentObj = {}
    })

    result.value = JSON.stringify(collectionArr)
}