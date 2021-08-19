function personAndTeacher() {

  function Person(name, email) {
    this.name = name
    this.email = email
  }

  function Teacher(name, email, subject) {
    Person.call(this, name, email)
    this.subject = subject
  }

  Teacher.prototype = Object.create(Person.prototype)
  return { Person, Teacher }
}

// console.log(personAndTeacher()) // {Person: ƒ, Teacher: ƒ}

//--------------------------------------------(2)---------------------------------------------


function personAndTeacher() {

  class Person {
    constructor(name, email) {
      this.name = name
      this.email = email
    }
  }

  class Teacher extends Person {
    constructor(name, email, subject) {
      super(name, email)
      this.subject = subject
    }
  }

  return { Person, Teacher }
}

// console.log(personAndTeacher()) // {Person: ƒ, Teacher: ƒ}