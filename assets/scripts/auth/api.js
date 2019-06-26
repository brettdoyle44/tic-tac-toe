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

const signIn = formData =>

module.exports = {
  signUp
}
