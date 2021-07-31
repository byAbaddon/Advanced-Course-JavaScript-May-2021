function townsToJSON(arr) {
  return JSON.stringify(arr.map(x => x.match(/[^|\]]+/g)).reduce((a, x) => {
    const [Town, Latitude, Longitude] = x.map(el => isNaN(el) ? el.trim() : +Number(el).toFixed(2))
    a.push({Town, Latitude, Longitude}); return a
  }, []).splice(1))
}

// console.log(townsToJSON([
//   '| Town | Latitude | Longitude |',
//   '| Veliko Turnovo | 43.0757 | 25.6172 |',
//   '| Monatevideo | 34.50 | 56.11 |'
// ]))


//[{"Town":"Veliko Turnovo","Latitude":43.08,"Longitude":25.62},{"Town":"Monatevideo","Latitude":34.5,"Longitude":56.11}]



//---------------------------------------------------------(2)-------------------------------------------

function townsToJSON(arr) {
  let townsObj = {}
  let catalogTown = []

  for (i = 1; i < arr.length; i++) {
    let [Town, Latitude, Longitude] = arr[i].match(/[^|\]]+/g)
    Town = Town.trim()
    Latitude = Math.round(Latitude * 100)  / 100
    Longitude = Math.round(Longitude * 100) / 100
    townsObj = { Town, Latitude, Longitude }
    catalogTown.push((townsObj))
  }

  return JSON.stringify(catalogTown)
}



// console.log(townsToJSON([
//   '| Town | Latitude | Longitude |',
//   '| Veliko Turnovo | 43.0757 | 25.6172 |',
//   '| Monatevideo | 34.50 | 56.11 |'
// ]))