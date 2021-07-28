function addRemoveElements(arr) {
  let collectionArr = []
  let counter = 1

  while (arr.length > 0) {
    let currentCommand = arr.shift()
    currentCommand == 'add' ? collectionArr.push(counter) : collectionArr.pop()
    counter++
  }

  return collectionArr.length > 0 ? collectionArr.join('\n') : 'Empty'
}

// console.log(addRemoveElements(['add', 'add', 'remove', 'add', 'add']))
// console.log(addRemoveElements(['remove', 'remove', 'remove', ]))