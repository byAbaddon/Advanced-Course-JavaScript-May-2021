function calorieObject(arr) {
  return arr.reduce((a, x, i) => {
    if (!(i & 1)) a[x] = +arr[i + 1]
    return a
  }, {})
}

//  console.log(calorieObject(['Yoghurt', '48', 'Rise', '138', 'Apple', '52']))



//-------------------------------------------------------------(2)------------------------

function calorieObject(arr) {
  let calorieObj = {}

  for (let i = 0; i < arr.length; i += 2) 
    calorieObj[arr[i]] = +arr[i + 1]
  
  return calorieObj
}

// console.log(calorieObject(['Yoghurt', '48', 'Rise', '138', 'Apple', '52']))



