function stringLength(...arr) {
  let stringsSum  = arr.map(x => x.length).reduce((a,b) => a + b)
  return `${stringsSum}\n${Math.round(stringsSum / 3)}` 
}

// console.log(stringLength('chocolate', 'ice cream', 'cake'))