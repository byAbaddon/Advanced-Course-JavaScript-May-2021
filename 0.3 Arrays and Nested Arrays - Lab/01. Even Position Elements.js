function evenPositionElement(arr) {
  return arr.filter((x, index) => !(index & 1)).join(' ')
}

// console.log(evenPositionElement(['20', '30', '40', '50', '60']))