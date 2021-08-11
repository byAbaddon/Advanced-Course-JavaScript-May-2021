function subSum(arr, start, end) {
  try {
     start < 0 ? start = 0 : null
     !arr[end] ?  end = arr.length - 1 : null
    return (arr.slice(start, end + 1).reduce((a, i) => a + i, 0)).toFixed(1) * 1      
 } catch{
    return NaN
 }

}

// console.log(subSum([10, 20, 30, 40, 50, 60], 3, 300)) //150
// console.log(subSum([1.1, 2.2, 3.3, 4.4, 5.5], -3, 1)) // 3.3
// console.log(subSum([10, 'twenty', 30, 40], 0, 2)) //NaN
// console.log(subSum([], 1, 2)) //0
// console.log(subSum('text', 0, 2)) //NaN