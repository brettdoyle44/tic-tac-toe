'use strict'

const store = require('../store')

const signUpSuccess = responseData => {
  $('#message').text('You signed-up successfully')
  $('#message').addClass('alert-success')
  $('form').trigger('reset')
}

const signUpFail = () => {
  $('#message').text('Something went wrong')
  $('#message').addClass('alert-danger')
  $('form').trigger('reset')
}

const signInSuccess = responseData => {
  $('#message').text('You are now signed in!')
  $('#message').addClass('alert-success')
  $('form').trigger('reset')
  store.user = responseData.user
}

const signInFail = () => {
  $('#message').text('Something went wrong')
  $('#message').addClass('alert-danger')
  $('form').trigger('reset')
}

const signOutSuccess = () => {
  $('#message').text('You are now signed out!')
  $('#message').addClass('alert-success')
  $('form').trigger('reset')
}

const signOutFail = () => {
  $('#message').text('Something went wrong')
  $('#message').addClass('alert-danger')
  $('form').trigger('reset')
}

module.exports = {
  signUpSuccess,
  signUpFail,
  signInSuccess,
  signInFail,
  signOutSuccess,
  signOutFail
}
