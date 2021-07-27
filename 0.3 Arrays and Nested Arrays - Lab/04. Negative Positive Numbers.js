function negativePositiveNumbers(arr) {
  let collectionArr = []
  while (arr.length > 0) {
    let currentElement = arr.shift()
    currentElement < 0 ? collectionArr.unshift(currentElement) : collectionArr.push(currentElement)
  }

  return collectionArr.join('\n')
}

// console.log(negativePositiveNumbers([3, -2, 0, -1]))