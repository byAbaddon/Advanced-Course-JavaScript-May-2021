class List {
  array = []
  size = 0

  add(el) {
    this.size++
    this.array.push(el)
    return this.array.sort((a, b) => a - b)
  }

  remove(index) {
    if (this.array[index] != undefined) {
      this.size--
     return  this.array.splice(index, 1)
    }
  }

  get(index) {
    return this.array[index]
  }
  
}



// let list = new List();
// list.add(5);
// list.add(6);
// list.add(7);
// console.log(list.get(1));
// list.remove(1);
// console.log(list.get(1));