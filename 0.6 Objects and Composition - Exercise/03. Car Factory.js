function carFactory(obj) {
  carObj = {
    'model': '',
    'engine': { 'power': 0, 'volume': 0 },
    'carriage': { 'type': '', 'color': '' },
    'wheels': [0, 0, 0, 0]
  }

  carObj['model'] = obj.model

  if (obj.power <= 90) {
    carObj['engine'].power = 90
    carObj['engine'].volume = 1800
  } else if (obj.power <= 120) {
    carObj['engine'].power = 120
    carObj['engine'].volume = 2400
  } else {
    carObj['engine'].power = 200
    carObj['engine'].volume = 3500
  }
  
  carObj['carriage'].type = obj.carriage
  carObj['carriage'].color = obj.color
  if (obj.wheelsize & 1) {
    carObj['wheels'].fill(obj.wheelsize, 0, 4)
  } else {
    carObj['wheels'].fill(obj.wheelsize -1, 0, 4)
  }
  
  return carObj
}


// console.log(carFactory({
//   model: 'VW Golf II',
//   power: 90,
//   color: 'blue',
//   carriage: 'hatchback',
//   wheelsize: 14
// }))