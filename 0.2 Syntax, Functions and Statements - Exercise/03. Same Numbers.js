function sameNumbers(num) {
  let arrOfNum = num.toString().split('').map(Number)
  let sum = arrOfNum.reduce((a,b) => a + b)
  let same = new Set(arrOfNum).size == 1
  return `${same}\n${sum}` 
}

// console.log(sameNumbers(2222222))