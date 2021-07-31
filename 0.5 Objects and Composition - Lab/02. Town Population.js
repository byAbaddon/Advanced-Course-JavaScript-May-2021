function townPopulation(arr) {
  let resultObj = arr.map(el => el.split(' <-> '))
    .reduce((a, [town, population]) => {
      a[town] = (a[town] || 0) + Number(population)
      return a
    }, {})

  for (const [key, val] of Object.entries(resultObj))
    console.log(key, ':', val)
}


// townPopulation(
//   ['Istanbul <-> 100000',
//     'Honk Kong <-> 2100004',
//     'Jerusalem <-> 2352344',
//     'Mexico City <-> 23401925',
//     'Istanbul <-> 1000'
//   ]
// )


//---------------------------------------------------(2)---------------------------



function townPopulation(arr) {
  let townsObj = {}
  for (const el of arr) {
    let [town, population] = el.split(' <-> ').map(el => isNaN(el) ? el : Number(el))

    if (townsObj[town]) {
      population += townsObj[town]
    }

    townsObj[town] = population

  }

  for (const [key, val] of Object.entries(townsObj))
    console.log(key, ':', val)

}

// townPopulation(
//   ['Istanbul <-> 100000',
//     'Honk Kong <-> 2100004',
//     'Jerusalem <-> 2352344',
//     'Mexico City <-> 23401925',
//     'Istanbul <-> 1000'
//   ]
// )