'use strict'

const api = require('./api')
const ui = require('./ui')

const onNewGame = event => {
  event.preventDefault()
  api.newGame()
    .then(ui.newGameSuccess)
    .catch(ui.newGameFail)
}



module.exports = {
  onNewGame
}
