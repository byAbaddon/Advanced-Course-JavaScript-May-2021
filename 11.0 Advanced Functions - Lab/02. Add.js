function solution(num) {
  let currentNum = num
  return num => currentNum + num 
}

// let add5 = solution(5)
// console.log(add5(2))
// console.log(add5(3))