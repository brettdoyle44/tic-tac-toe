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

// const onUpdateGame = event => {
//   event.preventDefault()
//   const target = event.target
//   const cellValue = $(target).data('cell-index')
//   if (gameLogic.noMove(cellValue) === true) {
//     $(target).text(store.currentPlayer)
//     const move = {
//       game: {
//         cell: {
//           index: $(target).data('cell-index'),
//           value: store.currentPlayer
//         },
//         over: store.winner
//       }
//     }
//     api.updateGame(move)
//       .then(ui.updateGameSuccess)
//       .catch(ui.updateGameFail)
//     gameLogic.switchUsers()
//   } else {
//     $('#message').text('Invalid move, try again')
//     $('#message').addClass('alert-danger')
//     $('#message').trigger('reset')
//   }
// }

const onUpdateGame = event => {
  event.preventDefault()
  const target = event.target
  const index = $(target).data('cell-index') // get the index of the clicked element
  // check if the cell already has something in it
  if (!store.game.cells[index]) {
    $(target).text(store.currentPlayer)
// check what's in game.cells array at the index
// that matches the clicked element
// remember that an empty string is "falsy"
// so if it's got something in it it will be true

    store.game.cells[index] = store.currentPlayer
// use the index to update the store.games.cells array with the currentPlayer token
// set up your move to send to the api...
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
