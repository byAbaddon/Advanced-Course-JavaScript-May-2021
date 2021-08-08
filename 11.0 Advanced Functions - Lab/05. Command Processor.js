function commandProcessor() {
  let str = ''
  return {
    append: string => str += string,
    removeStart: n => str = str.slice(n, ),
    removeEnd: n => str = str.slice(0, -n),
    print: () => console.log(str),
  }
}


// let firstZeroTest = commandProcessor();

// firstZeroTest.append('hello')
// firstZeroTest.append('again')
// firstZeroTest.removeStart(3)
// firstZeroTest.removeEnd(4)
// firstZeroTest.print()