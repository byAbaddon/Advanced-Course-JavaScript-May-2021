function getFibonacci() {
  let fib = [1, 0]

  return () => {
      const result = fib[0] + fib[1]
      fib  = [fib[1], fib[1] + fib[0]]
      return result
  }
}

// let fib = getFibonacci();
// console.log(fib()); // 1
// console.log(fib()); // 1
// console.log(fib()); // 2
// console.log(fib()); // 3
// console.log(fib()); // 5
// console.log(fib()); // 8
// console.log(fib()); // 13