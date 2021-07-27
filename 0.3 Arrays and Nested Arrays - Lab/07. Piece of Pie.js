function pieceOfPie(arr, start, end) {
  return arr.slice(arr.indexOf(start), arr.indexOf(end) + 1)
}


// console.log(pieceOfPie([
// 'Pumpkin Pie',
// 'Key Lime Pie',
// 'Cherry Pie',
// 'Lemon Meringue Pie',
// 'Sugar Cream Pie'],
// 'Key Lime Pie',
// 'Lemon Meringue Pie'))

//-------------------------------------------------(2)--------------------------

function pieceOfPie(arr, start, end) {
  let collectionArr = []
  for (let i = arr.indexOf(start); i <= arr.indexOf(end); i++) {
    collectionArr.push(arr[i])
  }
  return collectionArr
}


// console.log(pieceOfPie([
// 'Pumpkin Pie',
// 'Key Lime Pie',
// 'Cherry Pie',
// 'Lemon Meringue Pie',
// 'Sugar Cream Pie'],
// 'Key Lime Pie',
// 'Lemon Meringue Pie'))