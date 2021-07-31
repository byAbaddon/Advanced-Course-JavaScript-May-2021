function heroicInventory(arr) {
  let result = []

  for (const row of arr) {
    let [name, level, items] = row.split(' / ').map(el => Number(el) || el)
    items =  items ? items.split(', ') : []
    result.push({name, level, items})
  }
  
  return JSON.stringify(result)
}

// console.log(heroicInventory([
// 'Isacc / 25 / Apple, GravityGun',
// 'Derek / 12 / BarrelVest, DestructionSword',
// 'Hes / 1 / Desolator, Sentinel, Antara']
// ))