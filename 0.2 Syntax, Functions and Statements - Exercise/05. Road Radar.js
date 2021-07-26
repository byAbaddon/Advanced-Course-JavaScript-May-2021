function roadRadar(speed, road) {
  let radarObj = {'residential': 20 ,'city': 50, 'interstate': 90 ,'motorway': 130}
  let testSpeed = radarObj[road] - speed

 if (testSpeed >= 0)
    return `Driving ${speed} km/h in a ${speed + testSpeed} zone`
  testSpeed = Math.abs(testSpeed)
 
  if (testSpeed <= 20)
    return `The speed is ${testSpeed} km/h faster than the allowed speed of ${speed - testSpeed } - speeding`
  else if (testSpeed <= 40)
    return `The speed is ${testSpeed} km/h faster than the allowed speed of ${speed - testSpeed} - excessive speeding`
  return `The speed is ${testSpeed} km/h faster than the allowed speed of ${speed - testSpeed} - reckless driving`
}

// console.log(roadRadar(40, 'city')) //none
// console.log(roadRadar(21, 'residential')) //speeding
// console.log(roadRadar(120, 'interstate')) //excessive speeding
// console.log(roadRadar(200, 'motorway')) //reckless driving