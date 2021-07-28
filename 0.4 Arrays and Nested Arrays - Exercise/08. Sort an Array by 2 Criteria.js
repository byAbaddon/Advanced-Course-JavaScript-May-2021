function sortAnArrayByTwoCriteria(arr) {
 return arr.sort((a, b) => a.localeCompare(b))
   .sort((a, b) => a.length - b.length)
   .join('\n')

}

// console.log(sortAnArrayByTwoCriteria([
//   'test',
//   'Deny',
//   'omen',
//   'Default'
// ]))