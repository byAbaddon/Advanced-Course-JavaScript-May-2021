function sortArray(...input) {
  let [arr, command] = input
  return command == 'asc' ? arr = arr.sort((a, b) => a - b) : arr = arr.sort((a, b) => b - a)
}

// console.log(sortArray([14, 7, 17, 6, 8], 'asc'))
// console.log(sortArray([14, 7, 17, 6, 8], 'desc'))