function lastKNumbersSequence(loop, range) {
  let arrCollections = [1]

  for (let i = 1; i < loop; i++) 
    arrCollections[i] = arrCollections.slice(-range).reduce((a, b) => a + b)
  
  return arrCollections
}

// console.log(lastKNumbersSequence(6, 3))