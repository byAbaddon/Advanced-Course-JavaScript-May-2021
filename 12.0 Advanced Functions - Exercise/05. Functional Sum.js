(function functionalSum() {
  let sum = 0

  function add(num) {
      sum += num
      return add
  }

  add.toString = () => sum
  return add
}())


// console.log(functionalSum(add(1)))
// console.log(functionalSum(add(1)(6)(-3)))