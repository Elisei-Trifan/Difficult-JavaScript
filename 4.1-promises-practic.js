/* // Callback hell
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

function fetchUserCars(index, callback) {
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
*/

/* // Promisse
function fetchUserInfo() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      /// fetch
      const data = { id: 1, name: 'Elisei' }
      resolve(data)
    }, 1000)
  })
}

function fetchUserGames(id) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const data = ['game1', 'game2']
      resolve(data)
    }, 2000)
  })
}

function run() {
  fetchUserInfo()
    .then((userData) => {
      console.log(userData)
      return fetchUserGames(userData.id)
    })
    .then((userGames) => {
      console.log(userGames)
    })
}

run()
*/

function fetchGames() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const gamesFromServer = [
        { id: 1, name: 'Человек паук' },
        { id: 2, name: 'Марио' },
      ]
      resolve(gamesFromServer)
    }, 2000)
  })
}

const body = document.querySelector('body')

gamesFromServer.forEach((game) => {
  const gameElement = document.createElement('div')
  gameElement.innerText = `Игра: ${game.name}`
  gameElement.className = 'game-element'

  body.append(gameElement)
})
