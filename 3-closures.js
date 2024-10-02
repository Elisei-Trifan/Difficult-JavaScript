function createCalc(n) {
  return function (num) {
    console.log(100 + n - num)
  }
}

const calc = createCalc(5)
calc(10)

function createIncr(n) {
  return function (num) {
    return n + num
  }
}

const addOne = createIncr(1)
const addTen = createIncr(10)

console.log(addOne(7))
console.log(addOne(10))
console.log(addTen(7))
console.log(addTen(10))

function bind(context, fn) {
  return function () {
    fn.apply(context)
  }
}

function logPerson() {
  console.log(`Person: ${this.name}, ${this.age}, ${this.job}`)
}

const person11 = { name: 'Михаил', age: 22, job: 'Frontend' }
const person22 = { name: 'Елена', age: 19, job: 'SMM' }

bind(person11, logPerson)()
bind(person22, logPerson)
