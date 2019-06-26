'use strict'

const store = require('../store')

const signUpSuccess = responseData => {
  $('#signup-message').text('You signed-up successfully')
  $('#signup-message').addClass('alert-success')
  $('form').trigger('reset')
}

const signUpFail = responseData => {
  $('#signup-message').text('Something went wrong')
  $('#signup-message').addClass('alert-danger')
  $('form').trigger('reset')
}

const signInSuccess = responseData => {
  $('#signin-message').text('You are now signed in!')
  $('#signin-message').addClass('alert-success')
  $('form').trigger('reset')
  store.user = responseData.user
}

const signInFail = responseData => {
  $('#signin-message').text('Something went wrong')
  $('#signin-message').addClass('alert-danger')
  $('form').trigger('reset')
}

module.exports = {
  signUpSuccess,
  signUpFail,
  signInSuccess,
  signInFail
}
