'use strict'

const api = require('./api')
const ui = require('./ui')

const onNewGame = event => {
  event.preventDefault()
  api.newGame()
    .then(ui.newGameSuccess)
    .catch(ui.newGameFail)
}

const onUpdateGame = event => {
  event.preventDefault()
  const target = event.target
  const move = {
    game: {
      cell: {
        index: $(target).data('cell-index'),
        value: $(target).data('cell-value')
      },
      over: false
    }
  }
  api.updateGame(move)
    .then(ui.updateGameSuccess)
    .catch(ui.updateGameFail)
}

module.exports = {
  onNewGame,
  onUpdateGame
}
