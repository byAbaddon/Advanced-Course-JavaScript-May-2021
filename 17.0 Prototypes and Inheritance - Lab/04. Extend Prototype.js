function extendPrototype(ExtendClass) {
  ExtendClass.prototype.species = 'Human'
  ExtendClass.prototype.toSpeciesString = function () {
    return `I am a ${this.species}. ${this.toString()}`
  }
}