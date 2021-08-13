class Hex {
  constructor(v = 0) {this.v = v}
  valueOf() {return this.v}
  toString() {return '0x' + this.v.toString(16).toUpperCase()}
  parse (str) {return str.toString(16)}
  plus (n) {return new Hex(this.v + n)}
  minus (n) {return new Hex(this.v - n)} //parseInt(string, 16)
}


// let FF = new Hex(255);
// console.log(FF.toString())
// FF.valueOf() + 1 == 256;
// let a = new Hex(10);
// let b = new Hex(5);
// console.log(a.plus(b).toString());
// console.log(a.plus(b).toString() === '0xF')