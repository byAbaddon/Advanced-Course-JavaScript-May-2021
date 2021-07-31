function lowestPricesInCities(arr) {
  let productsObj = {}
  let sequenceArr = []

  for (const row of arr) {
    const [town, product, price] = row.split(' | ').map(el => Number(el) || el)

    if (product in productsObj) {
      if (price < productsObj[product].price) {
        productsObj[product].price = price
        productsObj[product].town = town
      }
    } else {
      productsObj[product] = {price, town}
      sequenceArr.push(product)
    }
  }

  for (let pr of sequenceArr) {
    console.log(pr + " -> " + productsObj[pr].price + ' (' + productsObj[pr].town + ')');
  }
}

// lowestPricesInCities([
//   'Sample Town | Sample Product | 1000',
//   'Sample Town | Orange | 2',
//   'Sample Town | Peach | 1',
//   'Sofia | Orange | 3',
//   'Sofia | Peach | 2',
//   'New York | Sample Product | 1000.1',
//   'New York | Burger | 10'
// ])