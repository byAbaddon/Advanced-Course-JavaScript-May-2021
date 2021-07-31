function storeCatalogue(arr) {
  let catalogObj = {}
  for (const row of arr) {
    const [name, price] = row.split(' : ')
    if (!name in catalogObj) {
      catalogObj[name]
    }
    catalogObj[name] = +price
  }

  const sortedCatalog = Object.entries(catalogObj).sort((a, b) => a[0].localeCompare(b[0]))
  let currentWord = Object.values(sortedCatalog)[0][0][0]
  console.log(currentWord)

  for (const key of sortedCatalog) {
    if (currentWord != key[0][0]) {
      currentWord = key[0][0]
      console.log(currentWord)
    }

    console.log(` ${key[0]}: ${key[1]}`)
  }
}

// storeCatalogue([
//   'Appricot : 20.4',
//   'Fridge : 1500',
//   'TV : 1499',
//   'Deodorant : 10',
//   'Boiler : 300',
//   'Apple : 1.25',
//   'Anti-Bug Spray : 15',
//   'T-Shirt : 10'
// ])