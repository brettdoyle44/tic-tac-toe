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
  const move = {game: {
    cell: {
    },
    over: ''
  }
  }
  move.game.cell.index = $('.square').data('cell-index')
  move.game.cell.value = $('.square').data('cell-value')
  move.game.over = false
  api.updateGame(move)
    .then(ui.updateGameSuccess)
    .catch(ui.updateGameFail)
}

module.exports = {
  onNewGame,
  onUpdateGame
}
