'use strict'

const getFormFields = require('../../../lib/get-form-fields')
const api = require('./api')
const ui = require('./ui')

const onSignUp = event => {
  event.preventDefault()
  const form = event.target
  const formData = getFormFields(form)
  api.signUp(formData)
    .then(ui.signUpSuccess)
    .catch(ui.signUpFail)
}

const onSignIn = event => {
  event.preventDefault()
  const form = event.target
  const formData = getFormFields(form)
  api.signIn(formData)
    .then(ui.signInSuccess)
    .catch(ui.signInFail)
}

const onSignOut = event => {
  event.preventDefault()
  api.signOut()
    .then(ui.signOutSuccess)
    .catch(ui.signOutFail)
}

const onQuickSignIn = event => {
  event.preventDefault()
  api.quickSignIn()
    .then(ui.signInSuccess)
    .catch(ui.signInFail)
}

const onChangePass = event => {
  event.preventDefault()
  const form = event.target
  const formData = getFormFields(form)
  api.changePass(formData)
    .then(ui.changePassSuccessful)
    .catch(ui.changePassFailure)
}

module.exports = {
  onSignUp,
  onSignIn,
  onSignOut,
  onQuickSignIn,
  onChangePass
}
