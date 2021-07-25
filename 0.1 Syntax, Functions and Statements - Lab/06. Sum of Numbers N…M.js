function sumOfNumbers(...arg) {
  const [n, m] = arg.map(Number)
  let result = 0
  for (let i = n; i <= m; i++)  result += i
  return result
}

// console.log(sumOfNumbers('-8', '20'))