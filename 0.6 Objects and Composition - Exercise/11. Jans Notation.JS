function janNotation(arr) {
  let num = []

  for (const x of arr) {
    if (Number(x)) num.push(x)
    else {
      if (num.length < 2) return 'Error: not enough operands!' 
      let n2 = num.pop()
      let n1 = num.pop()
      num.push(eval(n1 + x + n2))
    }
  }

  return num.length >= 2 ? 'Error: too many operands!' : num[0]
}

// console.log(janNotation([3, 4, '+']))
// console.log(janNotation([5, 3, 4, '*', '-']))
// console.log(janNotation([7, 33, 8, '-']))
// console.log(janNotation([15, '/']))


//------------------------------------------------(2)------------------------

function janNotation(arr) {
  let numbers = []

  for (const el of arr) {
    if (Number(el)) {
      numbers.push(Number(el))
    } else {
      if (numbers.length < 2) {
        return 'Error: not enough operands!'
      }
      numbers[numbers.length - 2] = eval(numbers[numbers.length - 2] + el + numbers[numbers.length - 1])
      numbers.splice(-1, 1)
    }
  }

  if (numbers.length >= 2)
    return 'Error: too many operands!'
  return numbers[0]
}


// console.log(janNotation([3, 4, '+']))
// console.log(janNotation([5, 3, 4, '*', '-']))
// console.log(janNotation([7, 33, 8, '-']))
// console.log(janNotation([15, '/']))

// console.log(janNotation([31, 2, '+', 11, '/']))
// console.log(janNotation([-1, 1, '+', 101, '*', 18, '+', 3 ,'/']))