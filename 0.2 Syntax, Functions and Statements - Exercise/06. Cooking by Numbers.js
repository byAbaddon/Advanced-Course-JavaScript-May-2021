function cookingByNumbers(...arr) {
  let num = +arr.shift()

  while (arr.length > 0) {
    let currentOperation = arr.shift()
    if (currentOperation == 'chop') console.log(num /= 2)
    if (currentOperation == 'dice') console.log(num = Math.sqrt(num))
    if (currentOperation == 'spice') console.log(num += 1)
    if (currentOperation == 'bake') console.log(num *= 3)
    if (currentOperation == 'fillet') console.log(num *= 0.80)
  }
}

// cookingByNumbers('9', 'dice', 'spice', 'chop', 'bake', 'fillet')


//-----------------------------------------------------(2)------------------------

function cookingByNumbers(...arr) {
  let num = +arr.shift()

  while (arr.length > 0) {
    let currentOperation = arr.shift()

    console.log(currentOperation == 'chop' ?
      num /= 2 : currentOperation == 'dice' ?
        num = Math.sqrt(num) : currentOperation == 'spice' ?
          num += 1 : currentOperation == 'bake' ?
            num *= 3 : num *= 0.80)
  }
}

// cookingByNumbers('9', 'dice', 'spice', 'chop', 'bake', 'fillet')

