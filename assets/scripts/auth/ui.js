'use strict'

const store = require('../store')

const signUpSuccess = responseData => {
  $('#message').text('You signed-up successfully, please sign-in.')
  $('#message').removeClass('alert-danger')
  $('#message').addClass('alert-success')
  $('form').trigger('reset')
  $('#signup-btn').hide()
  $('#sign-up').hide()
}

const signUpFail = () => {
  $('#message').text('Something went wrong')
  $('#message').removeClass('alert-success')
  $('#message').addClass('alert-danger')
  $('form').trigger('reset')
}

const changePassSuccessful = responseData => {
  $('#message').text('You changed your password successfully')
  $('#message').removeClass('alert-danger')
  $('#message').addClass('alert-success')
  $('form').trigger('reset')
}

const changePassFailure = () => {
  $('#message').text('Something went wrong')
  $('#message').removeClass('alert-success')
  $('#message').addClass('alert-danger')
  $('form').trigger('reset')
}

const signInSuccess = responseData => {
  $('#message').text('You are now signed in!')
  $('#message').removeClass('alert-danger')
  $('#message').addClass('alert-success')
  $('form').trigger('reset')
  $('#signup-btn').hide()
  $('#sign-up').hide()
  $('#signin-btn').hide()
  $('#sign-in').hide()
  $('#quick-sign-in').hide()
  $('#new-game').show()
  $('#password-btn').show()
  $('#change-password').show()
  store.user = responseData.user
}

const signInFail = () => {
  $('#message').text('Something went wrong')
  $('#message').removeClass('alert-success')
  $('#message').addClass('alert-danger')
  $('form').trigger('reset')
}

const signOutSuccess = () => {
  $('#message').text('You are now signed out!')
  $('#message').removeClass('alert-danger')
  $('#message').addClass('alert-success')
  $('#new-game').hide()
  $('.square').hide()
  $('#play-again').hide()
  $('#total-played').hide()
  $('#password-btn').hide()
  $('#change-password').hide()
  $('#sign-out').hide()
  $('#sign-up').show()
  $('#sign-in').show()
  $('#signup-btn').show()
  $('#signin-btn').show()
  $('header.container').css('margin-top', '20%')
}

const signOutFail = () => {
  $('#message').text('Something went wrong')
  $('#message').removeClass('alert-success')
  $('#message').addClass('alert-danger')
  $('form').trigger('reset')
}

module.exports = {
  signUpSuccess,
  signUpFail,
  signInSuccess,
  signInFail,
  signOutSuccess,
  signOutFail,
  changePassSuccessful,
  changePassFailure
}
