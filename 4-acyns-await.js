// /*
// Асинхронность с помощью колбэков

console.log('Request data...')

setTimeout(() => {
  console.log('Preparing data...')

  const backendData = {
    server: 'aws',
    port: 2000,
    status: 'working',
  }
  setTimeout(() => {
    backendData.modify = true
    console.log('Data received', backendData)
  }, 2000)
}, 2000)

// */
