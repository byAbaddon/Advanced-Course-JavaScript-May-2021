function timeToWalk(steps, meters, speed) {
  let minute = ~~(steps * meters / 500)
  let allTime = (steps * meters / speed / 1000 * 60)
  let second = ((minute + allTime) * 60).toFixed()
  let time = new Date(0, 0, 0, 0, 0, second)
  return (time.toString().split(' ')[4].substr(0, 8))
}

// console.log(timeToWalk(4000, 0.60, 5))