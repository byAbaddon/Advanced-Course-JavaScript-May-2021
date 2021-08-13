class Stringer {
  constructor(str, lng) {
    this.innerString = str
    this.innerLength = lng
  }

  increase(length) {
    this.innerLength += length
    this.innerLength < 0 ? this.innerLength = 0 : null
  }

  decrease(length) {
    this.innerLength -= length
    this.innerLength < 0 ? this.innerLength = 0 : null
  }

  toString() {
    if (this.innerLength == 0) return '...'
    if (this.innerString.length > this.innerLength) 
      return this.innerString.slice(0, this.innerString.length - this.innerLength) + '...'
    return this.innerString
  }

}



// let test = new Stringer("Test", 5);
// console.log(test.toString()); // Test

// test.decrease(3);
// console.log(test.toString()); // Te...

// test.decrease(5);
// console.log(test.toString()); // ...

// test.increase(4);
// console.log(test.toString()); // Test