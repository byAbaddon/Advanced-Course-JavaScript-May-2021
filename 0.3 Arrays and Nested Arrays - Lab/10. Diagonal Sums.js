function diagonalSums(arr) {
  let firsDiagonalSum = secondDiagonalSum = 0

  for (let i = 0; i < arr.length; i++) {
    firsDiagonalSum += arr[i][i]
    secondDiagonalSum += arr[i].reverse()[i]
  }

  return `${firsDiagonalSum} ${secondDiagonalSum}`
}

// console.log(diagonalSums([
//   [3, 5, 17],
//   [-1, 7, 14],
//   [1, -8, 89]
// ]))