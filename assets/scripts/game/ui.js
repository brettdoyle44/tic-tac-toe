'use strict'

const store = require('../store')
const gameLogic = require('../game-logic')

const newGameSuccess = responseData => {
  $('#message').text('A new game has been created')
  $('#message').removeClass('alert-warning')
  $('#message').removeClass('alert-danger')
  $('#message').addClass('alert-success')
  $('#new-game').hide()
  $('#password-btn').hide()
  $('#change-password').hide()
  $('#play-again').hide()
  $('#total-played').hide()
  $('.square').show()
  $('header.container').css('margin-top', '5%')
  store.game = responseData.game
  store.currentPlayer = 'X'
}

const newGameFail = () => {
  $('#message').text('Something went wrong')
  $('#message').removeClass('alert-success')
  $('#message').addClass('alert-danger')
}

const totalPlayedSuccess = responseData => {
  $('#message').text(`You have played ${responseData.games.length} games`)
  $('#message').removeClass('alert-danger')
  $('#message').removeClass('alert-success')
  $('#message').removeClass('alert-warning')
  $('#message').addClass('alert-primary')
}

const totalPlayedFail = () => {
  $('#message').text('You must login to get your total played games')
  $('#message').removeClass('alert-success')
  $('#message').addClass('alert-danger')
}

const updateGameSuccess = responseData => {
  store.game = responseData.game
  gameLogic.winCondition()
  if (gameLogic.winCondition() === true) {
    $('#play-again').show()
    $('#total-played').show()
  }
}

const updateGameFail = () => {
  $('#message').text('Something went wrong')
  $('#message').removeClass('alert-success')
  $('#message').addClass('alert-danger')
}

module.exports = {
  newGameSuccess,
  newGameFail,
  updateGameSuccess,
  updateGameFail,
  totalPlayedFail,
  totalPlayedSuccess
}
