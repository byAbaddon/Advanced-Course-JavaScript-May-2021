function constructionCrew(obj) {
  if (obj.dizziness) {
    obj.levelOfHydrated += obj.weight * 0.1 * obj.experience
    obj.dizziness = false
  }

  return obj
}

// console.log(constructionCrew({
//   weight: 120,
//   experience: 20,
//   levelOfHydrated: 200,
//   dizziness: true
// }))