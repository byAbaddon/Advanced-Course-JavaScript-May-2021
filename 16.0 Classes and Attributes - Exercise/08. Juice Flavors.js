function cappyJuice(arr) {
  let obj = {}
  let set = new Set()

  for (const el of arr) {
    [drink, quantity] = el.split(' => ')
    obj[drink] = obj[drink] || 0
    obj[drink] += +quantity
    obj[drink] >= 1000 ? set.add(drink) : null
  }

  set.forEach(el => console.log(el, '=>', Math.trunc(obj[el] / 1000)))
}

cappyJuice(
//   ['Kiwi => 234',
//     'Pear => 2345',
//     'Watermelon => 3456',
//     'Kiwi => 4567',
//     'Pear => 5678',
//     'Watermelon => 6789'
//   ]
// )