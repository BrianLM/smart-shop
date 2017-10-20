'use strict'
const getFormFields = require('../../lib/get-form-fields')
const authApi = require('./auth/api')
const authUI = require('./auth/ui')
const handlebars = require('./handlebars.js')
const listApi = require('./lists/api.js')
const listUI = require('./lists/ui.js')
const itemApi = require('./items/api.js')
const itemUI = require('./items/ui.js')

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
      listApi.indexLists()
        .then(listUI.onIndexSuccess)
        .catch(listUI.onIndexFailure)
      break
    }
    case 'search-items': {
      $('#content').empty()
      break
    }
    case 'index-items': {
      itemApi.indexItems()
        .then(itemUI.onIndexSuccess)
        .catch(itemUI.onIndexFailure)
      break
    }
    case 'index-purchases': {
      $('#content').empty()
      break
    }
  }
}

const toggleLIPurchased = function (event) {
  console.log(event.target.attributes['data-listitem'].value)
}

const toggleListActive = function (event) {
  console.log(event.target.attributes['data-list'].value)
}

const toggleShownLists = function (event) {
  event.preventDefault()
  switch (event.target.attributes['data-show'].value) {
    case 'active': {
      $('#content h3').text('Now showing all lists')
      $('a[data-show]').text('Show active only')
      event.target.attributes['data-show'].value = 'all'
      $('div[data-list]').removeClass('hidden')
      break
    }
    case 'all': {
      $('#content h3').text('Now showing only active lists')
      $('a[data-show]').text('Show all')
      event.target.attributes['data-show'].value = 'active'
      $('div[data-list][data-list="false"]').addClass('hidden')
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
  $('#content').on('click', 'input[data-listitem]', toggleLIPurchased)
  $('#content').on('click', 'input[data-list]', toggleListActive)
  $('#content').on('click', 'a[data-show]', toggleShownLists)
}

module.exports = {
  addHandlers
}
