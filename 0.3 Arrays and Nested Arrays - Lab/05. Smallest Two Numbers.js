function smallestTwoNumbers(arr) {
  return arr.sort((a, b) => a - b).splice(0, 2).join(' ')
}

// console.log(smallestTwoNumbers([30, 15, 50, 5]))