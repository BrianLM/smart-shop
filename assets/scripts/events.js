'use strict'
const getFormFields = require('../../lib/get-form-fields')
const authApi = require('./auth/api')
const authUI = require('./auth/ui')
const handlebars = require('./handlebars.js')

const signOutUser = function (event) {
  event.preventDefault()
  authApi.signOut()
    .then(authUI.signOutSuccess)
    .catch(authUI.signOutFailure)
}

const signInUser = function (event) {
  const data = getFormFields(this)
  event.preventDefault()
  authApi.signIn(data)
    .then(authUI.signInSuccess)
    .catch(authUI.signInFailure)
}

const signUpUser = function (event) {
  event.preventDefault()
  const data = getFormFields(event.target)
  authApi.signUp(data)
    .then(authUI.signUpSuccess)
    .catch(authUI.signUpFailure)
}

const changePassword = function (event) {
  const data = getFormFields(this)
  event.preventDefault()
  authApi.changePassword(data)
    .then(authUI.changePasswordSuccess)
    .catch(authUI.changePasswordFailure)
}

const tryCollapse = function () {
  if ($(window).width() <= 767) {
    $('#siteNavbar').collapse('toggle')
  }
}

const navHandler = function (event) {
  event.preventDefault()
  const handleToGet = event.target.attributes['data-view'].value
  switch (handleToGet) {
    case 'new-item': {
      handlebars.newItem()
      break
    }
    case 'new-list': {
      $('#content').empty()
      break
    }
    case 'index-lists': {
      $('#content').empty()
      break
    }
    case 'search-items': {
      $('#content').empty()
      break
    }
    case 'index-items': {
      $('#content').empty()
      break
    }
    case 'index-purchases': {
      $('#content').empty()
      break
    }
  }
}

const addHandlers = function () {
  $('#sign-out').on('click', signOutUser)
  $('#signup').on('submit', signUpUser)
  $('#signin').on('submit', signInUser)
  $('#change-password').on('submit', changePassword)
  $('.navbar-btn').on('click', tryCollapse)
  $('#change-password-modal').on('hidden.bs.modal', function () {
    $('#changeComment').empty()
  })
  $('a[data-view]').click('click', navHandler)
}

module.exports = {
  addHandlers
}
