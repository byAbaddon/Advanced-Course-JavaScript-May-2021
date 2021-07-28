function rotateArray(arr, rotator) {
  let loop = rotator % arr.length

  while (loop--) {
    const extractedElement = arr.pop()
    arr.unshift(extractedElement)
  }
  
  return arr.join(' ')
}

// console.log(rotateArray(['1', '2', '3', '4'], 2))
// console.log(rotateArray(['Banana', 'Orange', 'Coconut', 'Apple'], 15))