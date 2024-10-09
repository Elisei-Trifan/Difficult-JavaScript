function fetchUserInfo(callback) {
  setTimeout(() => {
    /// fetch
    const data = { id: 1, name: 'Elisei' }
    callback(data)
  }, 100)
}

function fetchUserGames(id, callback) {
  setTimeout(() => {
    /// fetch(id)
    const games = ['game1', 'game2']
    callback(games)
  }, 2000)
}

function fetchUserCars(id, callback) {
  ///fetch
  setTimeout(() => {
    const cars = ['mers', 'bmw', 'opel']
    callback(cars)
  }, 3000)
}

function run() {
  fetchUserInfo((userInfo) => {
    console.log(userInfo)

    fetchUserGames(userInfo.id, (userGames) => {
      console.log(userGames)
    })
    fetchUserCars(userInfo.id, (userCars) => {
      console.log(userCars)
    })
  })
}

run()
