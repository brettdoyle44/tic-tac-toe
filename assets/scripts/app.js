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
  $('.square').on('click', gameEvents.onUpdateGame)
  // $('.square').on('click', function () {
  //   const square = $('.square').data('cell-index')
  //   console.log(square)
  // })
  // $('.square').on('click', gameEvents.onUpdateGame)
})
