function printEveryNElementFromArray(arr, step) {
  return arr.reduce((a, v, i) => { i % step ? null : a.push(v); return a }, [])
}
  
// console.log(printEveryNElementFromArray(['1', '2', '3', '4', '5'], 6)) //1

//----------------------------------------------------(2)---------------------------


function printEveryNElementFromArray(arr, step) {
  let collectionArr = []
  for (let i = 0; i < arr.length; i += step) collectionArr.push(arr[i])
  return collectionArr
}

// console.log(printEveryNElementFromArray(['1', '2', '3', '4', '5'], 6))