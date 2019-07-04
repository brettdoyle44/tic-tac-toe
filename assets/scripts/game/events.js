'use strict'

const api = require('./api')
const ui = require('./ui')
const gameLogic = require('../game-logic')
const store = require('../store')

const onNewGame = event => {
  event.preventDefault()
  gameLogic.resetBoard()
  store.currentPlayer = 'X'
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
  const index = $(target).data('cell-index')
  if (!store.game.cells[index] && gameLogic.winCondition() === true) {
    $('#message').text('Game is over, cannot make move.')
    $('#message').addClass('alert-danger')
    $('#message').trigger('reset')
  } else if (!store.game.cells[index]) {
    $(target).text(store.currentPlayer)
    store.game.cells[index] = store.currentPlayer
    const move = {
      game: {
        cell: {
          index: index,
          value: store.currentPlayer
        },
        over: gameLogic.winCondition()
      }
    }
    api.updateGame(move)
      .then(ui.updateGameSuccess)
      .catch(ui.updateGameFail)
    $('#message').text(`Successful move by player ${store.currentPlayer}`)
    $('#message').removeClass('alert-danger')
    $('#message').addClass('alert-success')
    gameLogic.switchUsers()
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
