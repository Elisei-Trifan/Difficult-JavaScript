const person = new Object({
  name: 'Elisei',
  age: 29,
  greet: () => {
    console.log('Greet!')
  },
})

Object.prototype.sayHello = () => {
  console.log('Hello')
}

const lena = Object.create(person)
lena.name = 'Elena'

const alina = Object.create(lena)
alina.name = 'Alina'
