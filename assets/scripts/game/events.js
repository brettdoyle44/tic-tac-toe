'use strict'

const api = require('./api')
const ui = require('./ui')
const gameLogic = require('../game-logic')

const onNewGame = event => {
  event.preventDefault()
  api.newGame()
    .then(ui.newGameSuccess)
    .catch(ui.newGameFail)
}

const onUpdateGame = event => {
  event.preventDefault()
  const target = event.target
  gameLogic.switchUsers()
  $(target).data('cell-value', gameLogic.switchUsers)
  $(target).text(gameLogic.switchUsers)
  const move = {
    game: {
      cell: {
        index: $(target).data('cell-index'),
        value: $(target).data('cell-value')
      },
      over: gameLogic.winCondition()
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
