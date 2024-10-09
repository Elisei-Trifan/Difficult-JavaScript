function fetchUserInfo(callback) {
  setTimeout(() => {
    /// fetch
    const data = { id: 1, name: 'Elisei' }
    callback(data)
  }, 100)
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
