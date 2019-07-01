'use strict'

const api = require('./api')
const ui = require('./ui')
const gameLogic = require('../game-logic')

const onNewGame = event => {
  event.preventDefault()
  gameLogic.resetBoard()
  api.newGame()
    .then(ui.newGameSuccess)
    .catch(ui.newGameFail)
}

const onPlayAgain = event => {
  event.preventDefault()
  gameLogic.resetBoard()
  api.playAgain()
    .then(ui.newGameSuccess)
    .catch(ui.newGameFail)
}

const onTotalPlayed = event => {
  event.preventDefault()
  api.totalPlayed()
    .then(ui.totalPlayedSuccess)
    .catch(ui.totalPlayedFail)
}

const onUpdateGame = event => {
  event.preventDefault()
  const target = event.target
  const cellValue = $(target).data('cell-index')
  if (gameLogic.noMove(cellValue) === true) {
    $(target).data('cell-value', gameLogic.switchUsers)
    $(target).text(gameLogic.switchUsers)
    gameLogic.switchUsers()
    const move = {
      game: {
        cell: {
          index: $(target).data('cell-index'),
          value: $(target).data('cell-value')
        },
        over: gameLogic.winCondition
      }
    }
    api.updateGame(move)
      .then(ui.updateGameSuccess)
      .catch(ui.updateGameFail)
  } else {
    $('#message').text('Invalid move, try again')
    $('#message').addClass('alert-danger')
    $('#message').trigger('reset')
  }
}

module.exports = {
  onNewGame,
  onUpdateGame,
  onPlayAgain,
  onTotalPlayed
}
