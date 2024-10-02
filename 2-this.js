function hello() {
  console.log('hello', this)
}

const person1 = {
  name: 'Elisei',
  age: 29,
  sayHello: hello,
  sayHelloWindow: hello.bind(window),
  logInfo: function (job, phone) {
    console.log(`Name is ${this.name}`)
    console.log(`Age is ${this.age}`)
    console.log(`Job is ${job}`)
    console.log(`Phone is ${phone}`)
  },
}

const vaselina = {
  name: 'alina',
  age: 25,
}

// person1.logInfo.bind(vaselina, 'frontend', '156295')() // метод bind первым аргументом принимает нужный нам контекст, а последующимим параметрами, то что нужно уже для функции logInfo.

// person1.logInfo.call(vaselina, 'frontend', '156295') // метод сразу же и вызывается

// person1.logInfo.apply(vaselina, ['frontend', '156295']) // метод сразу же вызывается, но принимает только два аргумента, это нужный контекст, а вторым - массив значений для функции

// const numbers = [1, 2, 3, 4, 5]

// // function mult(arr, n) {
// //   return arr.map((item) => item * n)
// // }

// // console.log(mult(numbers, 5))

// Array.prototype.mult = function (n) {
//   return this.map((item) => item * n)
// }

// console.log(numbers.mult(5))

document.querySelector('.btn').onclick = function () {
  console.log(this)
  let r = 5
  r++
  this.innerHTML += ' 0'
  this.style.borderRadius = `${r}px`
}

function f2() {
  console.log(this)
  document.querySelector('.out-block').textContent = this.value
}

document.querySelector('.s-1').addEventListener('change', f2)

f2.apply(document.querySelector('.s-1'))

const animal = {
  cat: function () {
    console.log('May')
    return this
  },

  dog: {
    breed: 'DOG',
    speak: function () {
      console.log('Woof')
      return this
    },
  },
}

// console.log(animal.cat())
console.log(animal.dog.speak())
