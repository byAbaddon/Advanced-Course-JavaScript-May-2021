function toStringExtension() {

  class Person {
    constructor(name, email) {
      this.name = name
      this.email = email
    }

    toString() {
      return this.constructor.name + ' (' +
        Object.entries(this).map(([key, value]) => `${key}: ${value}`).join(', ') + ')'
    }
  }

  class Teacher extends Person {
    constructor(name, email, subject) {
      super(name, email)
      this.subject = subject
    }
  }

  class Student extends Person {
    constructor(name, email, course) {
      super(name, email)
      this.course = course
    }
  }

  return {Person, Teacher, Student}
}


// let classes = toStringExtension()
// let Person = classes.Person
// let p = new Person("Pesho",'Pesho@pesh.com');
// console.log(p.toString()) //'Person (name: Pesho, email: Pesho@pesh.com)'
