'use strict'

const store = require('../store')

const newGameSuccess = () => {
  $('#message').text('A new game has been created')
  $('#message').addClass('alert-success')
}

const newGameFail = () => {
  $('#message').text('Something went wrong')
  $('#message').addClass('alert-danger')
}

module.exports = {
  newGameSuccess,
  newGameFail
}
