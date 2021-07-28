function sortingNumbers(input) {
  input.sort((a, b) => a - b)
  return input.reduce((a, x, i, arr) => {
    a.push(x)
    a.push(arr[arr.length - i - 1])
    return a
  }, []).splice(0, input.length)
}

// console.log(sortingNumbers([1, 65, 3, 52, 48, 63, 31, -3, 18, 56,]))

////(10) [-3, 65, 1, 63, 3, 56, 18, 52, 31, 48]

//-------------------------------------(2)-----------------------------------------

function sortingNumbers(arr) {
  let collectionArr = []
  
  while (arr.length > 0) {
    arr = arr.sort((a, b) => a - b)
    collectionArr.push(arr.shift())
    collectionArr.push(arr.pop())
  }

  return collectionArr
}

//console.log(sortingNumbers([1, 65, 3, 52, 48, 63, 31, -3, 18, 56]))
