function extractIncreasingSubsequenceFromArray(arr) {
  return arr.reduce((a, x) => {x >= (a.slice(-1)) ? a.push(x) : null; return a}, [])
}

// console.log(extractIncreasingSubsequenceFromArray([1, 3, 8, 4, 10, 12, 3, 2, 24]))
//[1, 3, 8, 10, 12, 24]

//------------------------------(2)----------------------------

function extractIncreasingSubsequenceFromArray(arr) {
  let currentNum = arr[0]
  let collectionArr = []

  for (let i = 0; i < arr.length; i++) {
    if (currentNum <= arr[i]) {
      currentNum = arr[i]
      collectionArr.push(currentNum)
    }
  }

  return collectionArr
}

// console.log(extractIncreasingSubsequenceFromArray([1, 3, 8, 4, 10, 12, 3, 2, 24]))

