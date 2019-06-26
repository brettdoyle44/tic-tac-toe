'use strict'

const store = require('../store')

const signUpSuccess = responseData => {
  $('#signup-message').text('You signed-up successfully')
  $('#signup-message').addClass('alert-success')
}

const signUpFail = responseData => {
  $('#signup-message').text('Something went wrong')
  $('#signup-message').addClass('alert-danger')
}

module.exports = {
  signUpSuccess,
  signUpFail
}
