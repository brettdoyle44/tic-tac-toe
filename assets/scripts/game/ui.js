'use strict'

const board = require('../board')

const gameLogic = require('../game-logic')

const newGameSuccess = responseData => {
  $('#message').text('A new game has been created')
  $('#message').removeClass('alert-danger')
  $('#message').addClass('alert-success')
  board.game = responseData.game
  console.log(board.game)
}

const newGameFail = () => {
  $('#message').text('Something went wrong')
  $('#message').removeClass('alert-success')
  $('#message').addClass('alert-danger')
}

const totalPlayedSuccess = responseData => {
  $('#message').text(`You have played ${responseData.games.length} games`)
  $('#message').removeClass('alert-danger')
  $('#message').addClass('alert-success')
  console.log(responseData)
}

const totalPlayedFail = () => {
  $('#message').text('You must login to get your total played games')
  $('#message').removeClass('alert-success')
  $('#message').addClass('alert-danger')
}

const updateGameSuccess = responseData => {
  $('#message').text('Successful move')
  $('#message').removeClass('alert-danger')
  $('#message').addClass('alert-success')
  board.game = responseData.game
  console.log(responseData)
  gameLogic.winCondition()
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
