function argumentInfo(...arr) {
  let countObj = {}

  for (const el of arr) {
    const type = typeof el
    console.log(`${type}: ${el}`)
    if (!countObj[type]) {
      countObj[type] = 0
    }
    countObj[type]++
  }

  Object.keys(countObj).sort((a, b) => countObj[b] - countObj[a])
    .forEach(el => console.log(`${el} = ${countObj[el]}`))
}



// argumentInfo('cat', 42, function () {
//   console.log('Hello world!');
// })