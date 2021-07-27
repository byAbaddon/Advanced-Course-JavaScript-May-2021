function biggestElement(arr) {
  return arr.reduce((a, x) => Math.max(...x) > a ? Math.max(...x) : a, -Infinity)
}

console.log(biggestElement([[20, 50, 10], [8, 33, 145]]))
  

//------------------------------------------------(2)----------------------------------

function biggestElement(arr) {
  let theBiggestNum = Number.NEGATIVE_INFINITY

  for (let i = 0; i < arr.length; i++) {
    currentBiggestNum = Math.max(...arr[i])
    if (currentBiggestNum > theBiggestNum)  theBiggestNum = currentBiggestNum  
  }

  return theBiggestNum
}

// console.log(biggestElement([[20, 50, 10], [8, 33, 145]]))




