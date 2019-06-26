'use strict'

const store = require('../store')

const board = require('../board')

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

module.exports = {
  newGameSuccess,
  newGameFail
}
