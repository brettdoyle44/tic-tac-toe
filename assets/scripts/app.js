'use strict'

const authEvents = require('./auth/events')
const gameEvents = require('./game/events')

$(() => {
  // auth events
  $('#sign-up').on('submit', authEvents.onSignUp)
  $('#sign-in').on('submit', authEvents.onSignIn)
  $('#sign-out').on('click', authEvents.onSignOut)
  // game events
  $('#square-one').on('click', function () {
    $(this).text('X')
  })
})
