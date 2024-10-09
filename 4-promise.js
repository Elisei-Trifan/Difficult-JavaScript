/* // ========== Асинхронность с помощью колбэков

// console.log('Request data...')

// setTimeout(() => {
//   console.log('Preparing data...')

//   const backendData = {
//     server: 'aws',
//     port: 2000,
//     status: 'working',
//   }
//   setTimeout(() => {
//     backendData.modify = true
//     console.log('Data received', backendData)
//   }, 2000)
// }, 2000)

*/

// ========== Асинхронность с помощью Promise

// console.log('Request data...')

// const p = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     console.log('Preparing data...')

//     const backendData = {
//       server: 'aws',
//       port: 2000,
//       status: 'working',
//     }
//     resolve(backendData)
//   }, 2000)
// })

// p.then((data) => {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       data.modify = true
//       resolve(data)
//     }, 2000)
//   })
// })
//   .then((clientData) => {
//     console.log('Data resolved', clientData)
//     clientData.fromPromise = false
//     return clientData
//   })
//   .then((data) => {
//     console.log('Modify', data)
//   })
//   .catch((er) => {
//     console.error('Error:', er)
//   })
//   .finally(() => {
//     console.log('Finally')
//   })

// const sleep = (ms) => {
//   return new Promise((resolve) => {
//     setTimeout(() => resolve(), ms)
//   })
// }

// // sleep(2000).then(() => console.log('After 2 sec'))

// Promise.all([sleep(2000), sleep(5000)]).then(() => {
//   return console.log('All promises')
// })

// Promise.race([sleep(2000), sleep(5000)]).then(() =>
//   console.log('Race promises')
// )

let promise = new Promise(function (resolve, reject) {
  setTimeout(() => {
    console.log('Start')
    resolve('done!')
    reject()
  }, 1000)
})

promise.then(
  (result) => console.log(result),
  () => console.log(new Error())
)
