function listProcessor(arr) {
  let collection = []
  let funObj = {
    add: x => collection.push(x),
    remove: x => collection = collection.filter(el => el != x),
    print: () => console.log(collection.join(',')),
  }

  arr.forEach(x => {
    const [command, value] = x.split(' ')
    funObj[command](value)

  })

}


// listProcessor(['add hello', 'add again', 'remove hello', 'add again', 'print'])