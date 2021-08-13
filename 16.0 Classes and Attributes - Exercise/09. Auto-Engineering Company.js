function autoEngineeringCompany(arr) {
  let autoObj = {}

  for (const el of arr) {
    const [car, model, brand] = el.split(' | ')
    autoObj[car] = autoObj[car] || {}
    autoObj[car][model] = autoObj[car][model] || []
    autoObj[car][model].push(+brand)
  }

  for (const [car, model] of Object.entries(autoObj)) {
    console.log(car)
    for (const [m, b] of Object.entries(model)) {
      console.log('###' + m, '->', b.reduce((a, b) => a + b))
    }
  }
}

// autoEngineeringCompany(
// ['Audi | Q7 | 1000',
// 'Audi | Q6 | 100',
// 'BMW | X5 | 1000',
// 'BMW | X6 | 100',
// 'Citroen | C4 | 123',
// 'Volga | GAZ-24 | 1000000',
// 'Lada | Niva | 1000000',
// 'Lada | Jigula | 1000000',
// 'Citroen | C4 | 22',
// 'Citroen | C5 | 10'])


// autoEngineeringCompany(
//   [
// 'Mercedes-Benz | 50PS | 123',
// 'Mini | Clubman | 20000',
// 'Mini | Convertible | 1000',
// 'Mercedes-Benz | 60PS | 3000',
// 'Hyunday | Elantra GT | 20000',
// 'Mini | Countryman | 100',
// 'Mercedes-Benz | W210 | 100',
// 'Mini | Clubman | 1000',
// 'Mercedes-Benz | W163 | 200'])