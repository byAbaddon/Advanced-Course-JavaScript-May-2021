function circleArea(arg) {
  if (typeof(arg) == 'number')
    return (arg ** 2 * Math.PI).toFixed(2)
  return `We can not calculate the circle area, because we receive a ${typeof arg}.` 
}

// console.log(circleArea(5))
// console.log(circleArea('name'))