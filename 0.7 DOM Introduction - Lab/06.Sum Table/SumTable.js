function sumTable() {
  let list = [...document.querySelectorAll('tr')]
  let result = document.getElementById('sum')
  let sum = 0
  for (let i = 1; i < list.length - 1; i++) {
    sum += Number(list[i].children[1].textContent)
  }
  result.textContent = sum
}