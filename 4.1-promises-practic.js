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

/* 
function fetchGames() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      //   const gamesFromServer = 'edcsdsdvs'
      const gamesFromServer = [
        { id: 1, name: 'Человек паук' },
        { id: 2, name: 'Марио' },
      ]
      if (Array.isArray(gamesFromServer)) {
        resolve(gamesFromServer)
      } else {
        reject('Произошла ошибка при загрузке данных')
      }
    }, 2000)
  })
}

function renderLoading() {
  const body = document.querySelector('body')

  const loading = document.createElement('div')
  loading.id = 'loading'
  loading.textContent = 'Загрузка...'

  body.append(loading)
}

function renderGames(games) {
  const body = document.querySelector('body')

  const loading = document.querySelector('#loading')
  loading.remove()

  games.forEach((game) => {
    const gameElement = document.createElement('div')
    gameElement.innerText = `Игра: ${game.name}`
    gameElement.className = 'game-element'

    body.append(gameElement)
  })
}

renderLoading()

function errorRender(message) {
  loading.remove()
  const err = document.createElement('p')
  err.textContent = message
  body.append(err)
}

fetchGames()
  .then((games) => {
    renderGames(games)
  })
  .catch((message) => {
    errorRender(message)
  })
  .finally(() => {
    setTimeout(() => {
      const fin = document.createElement('p')
      fin.textContent = 'Промис завершен'
      body.append(fin)
    }, 300)
  })

const body = document.querySelector('body')
*/
//  =============================================

function fetchAllVideo() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const allVideo = [
        { id: 1, title: 'топ 10 видео в 2024 году' },
        { id: 2, title: 'Укладка плитки' },
        { id: 3, title: 'Размножение можжевельников' },
      ]
      resolve(allVideo)
    }, 300)
  })
}

function fetchDescriptionVideo(id) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (id === 1) {
        const description = {
          id: 1,
          title: 'топ 10 видео в 2024 году',
          hashTags: ['топ', '2024'],
          authorId: 55,
        }
        resolve(description)
      } else if (id === 2) {
        const description = {
          id: 2,
          title: 'Укладка плитки',
          hashTags: ['плитка', 'укладка'],
          authorId: 60,
        }
        resolve(description)
      }
    }, 500)
  })
}

function fetchAuthorInfo() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      //   const authorId = description.authorId
      const author = {
        id: 55,
        name: 'JavaScript',
        videiIds: [1, 2, 3],
        shortsIds: [10, 20, 30],
      }
      resolve(author)
    }, 700)
  })
}

function renderVideo(arg) {
  const body = document.querySelector('body')

  if (Array.isArray(arg)) {
    arg.forEach((item) => {
      const video = document.createElement('li')
      video.innerHTML = item.title

      body.append(video)
    })
  } else {
    const info = document.createElement('p')
    info.textContent = arg.title || arg.shortsIds
    body.append(info)
  }
}

function main() {
  fetchAllVideo()
    .then((video) => {
      renderVideo(video)
      return fetchDescriptionVideo(1)
    })
    .then((description) => {
      renderVideo(description)
      return fetchAuthorInfo()
    })
    .then((author) => {
      renderVideo(author)
    })
}

main()
