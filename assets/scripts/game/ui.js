'use strict'

const store = require('../store')

const board = require('../board')

const gameLogic = require('../game-logic')

const newGameSuccess = responseData => {
  $('#message').text('A new game has been created')
  $('#message').addClass('alert-success')
  board.game = responseData.game
  console.log(board.game)
}

const newGameFail = () => {
  $('#message').text('Something went wrong')
  $('#message').addClass('alert-danger')
}

const updateGameSuccess = responseData => {
  $('#message').text('Successful move')
  $('#message').addClass('alert-success')
  board.game = responseData.game
  console.log(responseData)
  gameLogic.switchUsers()
  gameLogic.winCondition()
}

const updateGameFail = () => {
  $('#message').text('Something went wrong')
  $('#message').addClass('alert-danger')
}

module.exports = {
  newGameSuccess,
  newGameFail,
  updateGameSuccess,
  updateGameFail
}
