'use strict'

const config = require('../config')

const store = require('../store')

const signUp = formData => {
  console.log(formData)
  return $.ajax({
    url: config.apiUrl + '/sign-up',
    data: formData,
    method: 'POST'
  })
}

const signIn = formData => {
  console.log(formData)
  return $.ajax({
    url: config.apiUrl + '/sign-in',
    data: formData,
    method: 'POST'
  })
}

const signOut = () => {
  return $.ajax({
    url: config.apiUrl + '/sign-out',
    method: 'DELETE',
    headers: {
      Authorization: 'Token token=' + store.user.token
    }
  })
}

const quickSignIn = () => {
  return $.ajax({
    url: config.apiUrl + '/sign-in',
    data: {
      'credentials': {
        'email': 'brett@brett.com',
        'password': 'brett'
      }
    },
    method: 'POST'
  })
}

module.exports = {
  signUp,
  signIn,
  signOut,
  quickSignIn
}
