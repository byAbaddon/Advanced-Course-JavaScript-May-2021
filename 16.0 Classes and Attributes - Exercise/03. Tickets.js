function tickets(arr, crit) {
  function Ticket(destination, price, status) {
    Object.assign(this, {destination, price, status})
  }
  return arr.map(el => {
    return new Ticket(...el.split('|').map(el => Number(el) || el))
  }).sort((a, b) => isNaN(a[crit]) ? a[crit].localeCompare(b[crit]) : a[crit] - b[crit])
}

// console.log(
//   tickets(
//     ['Philadelphia|94.20|available',
//       'New York City|95.99|available',
//       'New York City|95.99|sold',
//       'Boston|126.20|departed'
//     ],
//     'destination'))

//----------------------------------------------(2)---------------------


function tickets(arr, crit) {
  class Ticket {
    constructor(destination, price, status) {
      Object.assign(this, {
        destination,
        price,
        status
      })
    }
  }

  return arr.map(el => {
    [destination, price, status] = el.split('|').map(el => Number(el) || el)
    return new Ticket(destination, price, status)
  }).sort((a, b) => !isNaN(a[crit]) ? a[crit] - b[crit] : a[crit].localeCompare(b[crit]))
}


// console.log(
//   tickets(
//     ['Philadelphia|94.20|available',
//       'New York City|95.99|available',
//       'New York City|95.99|sold',
//       'Boston|126.20|departed'
//     ],
//     'destination'))