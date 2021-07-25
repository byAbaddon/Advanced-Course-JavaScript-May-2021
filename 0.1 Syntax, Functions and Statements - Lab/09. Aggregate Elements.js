function aggregateElements(arr) {
  const sum = arr.reduce((a, b) => a + b)
  const inverse = arr.reduce((a, b) =>   a  + 1 / b, 0)
  const concat = arr.join('')
  return `${sum}\n${inverse}\n${concat}`
}

// console.log(aggregateElements([1, 2, 3]))