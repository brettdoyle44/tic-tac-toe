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
  $('#square-one').on('click', function () {
    $(this).text('X')
  })
})
