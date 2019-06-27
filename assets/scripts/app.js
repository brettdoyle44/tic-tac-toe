'use strict'

const authEvents = require('./auth/events')
const gameEvents = require('./game/events')
const apiEvents = require('./game/api')
const board = require('./board')

$(() => {
  // auth events
  $('#sign-up').on('submit', authEvents.onSignUp)
  $('#sign-in').on('submit', authEvents.onSignIn)
  $('#sign-out').on('click', authEvents.onSignOut)
  $('#quick-sign-in').on('click', authEvents.onQuickSignIn)
  // game events
  $('#new-game').on('click', gameEvents.onNewGame)
  $('.square').on('click', gameEvents.onUpdateGame)
  // $('.square').on('click', gameEvents.onUpdateGame)
})
