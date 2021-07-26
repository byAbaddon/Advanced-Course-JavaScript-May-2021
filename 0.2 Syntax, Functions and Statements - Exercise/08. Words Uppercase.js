function wordsUppercase(arr) {
  return arr.match(/\w+/g).map(x => x.toUpperCase()).join(', ')
}

// console.log(wordsUppercase('Hi, how are you?'))