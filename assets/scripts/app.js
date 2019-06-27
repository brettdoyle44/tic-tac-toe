'use strict'

const authEvents = require('./auth/events')
const gameEvents = require('./game/events')

$(() => {
  // auth events
  $('#sign-up').on('submit', authEvents.onSignUp)
  $('#sign-in').on('submit', authEvents.onSignIn)
  $('#sign-out').on('click', authEvents.onSignOut)
  $('#quick-sign-in').on('click', authEvents.onQuickSignIn)
  // game events
  $('#new-game').on('click', gameEvents.onNewGame)
  $('.square').on('click', function () {
    const move = {game: {
      cell: {
        index: '',
        value: ''
      },
      over: ''
    }
    }
    move.game.cell.index = $('div').data('cell-index')
    move.game.cell.value = $('div').data('cell-value')
    move.game.over = false
    console.log(move)
  })
  // $('.square').on('click', gameEvents.onUpdateGame)
})
