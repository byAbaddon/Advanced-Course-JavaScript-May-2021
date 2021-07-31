function createSortedList() {
  let arr = []

  return {
    size : 0,
    add(element) {
      arr.push(element)
      arr.sort((a, b) => a - b)
      this.size++
    },
    remove(index) {
      if (arr[index] != undefined){
        arr.splice(index, 1)
        this.size--
      }
    },
    get(index) {
      if (arr[index] != undefined)
        return arr[index]
    },
  }
}


// let list = createSortedList()
// list.add(5)
// list.add(6)
// list.add(7)
// console.log(list.get(1))
// list.remove(1)
// console.log(list.get(1))
// console.log(list.size)