function magicMatrices(arr) {
  let checker = arr[0].reduce((a, b) => a + b)
  let colSum = 0

  for (let row = 0; row < arr.length; row++) {
    if (checker != arr[row].reduce((a, b) => a + b)) return false

    for (let col = 0; col < arr.length; col++) {
      colSum += arr[col][row]
    }
    if (checker != colSum) return false
    colSum = 0

  }

  return true
}

// console.log(magicMatrices([
//   [4, 5, 6],
//   [6, 5, 4],
//   [5, 5, 5]
// ]))