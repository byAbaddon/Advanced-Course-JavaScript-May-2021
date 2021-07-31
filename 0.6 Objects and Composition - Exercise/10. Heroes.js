function solve() {

  function mage(playerName) {
    let name = playerName
    let health = 100
    let mana = 100
    return {
      name, health, mana,
      cast(magic) {
      this.mana--
      return `${this.name} cast ${magic}`
    }}
  }

  function fighter(playerName) {
    let name = playerName
    let health = 100
    let stamina = 100
    return {
      name, health, stamina,
      fight() {
        this.stamina--
        return `${this.name} slashes at the foe!`
     }}
  }

  return {
    mage,
    fighter,
 }

}


// let create = solve();
// const scorcher = create.mage("Scorcher");
// console.log(scorcher.cast("fireball"))
// console.log(scorcher.cast("thunder"))
// console.log(scorcher.cast("light"))

// const scorcher2 = create.fighter("Scorcher 2");
// console.log(scorcher2.fight())

// console.log(scorcher2.stamina);
// console.log(scorcher.mana);
