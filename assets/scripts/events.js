'use strict'
const getFormFields = require('../../lib/get-form-fields')
const authApi = require('./auth/api')
const authUI = require('./auth/ui')
const handlebars = require('./handlebars.js')
const store = require('./store.js')
const listApi = require('./lists/api.js')
const listUI = require('./lists/ui.js')
const itemApi = require('./items/api.js')
const itemUI = require('./items/ui.js')
const liApi = require('./list_items/api.js')
const liUI = require('./list_items/ui.js')

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
  const handleToGet = this.attributes['data-view'].value
  switch (handleToGet) {
    case 'new-item': {
      handlebars.newItem()
      break
    }
    case 'new-list': {
      handlebars.newList()
      break
    }
    case 'index-lists': {
      listApi.indexLists()
        .then(listUI.onIndexSuccess)
        .catch(listUI.onIndexFailure)
      break
    }
    case 'search-items': {
      handlebars.searchItems()
      break
    }
    case 'index-items': {
      onIndexItems(event)
      break
    }
  }
}

const toggleLIPurchased = function (event) {
  const listitem = $(event.target).attr('data-listitem')
  const data = {'list_item': {'purchased': event.target.checked}}
  liApi.onUpdate(listitem, data)
    .then(liUI.onUpdateSuccess)
    .catch(liUI.onUpdateFailure)
}

const toggleListActive = function (event) {
  const id = $(event.target).attr('data-list')
  const active = event.target.checked || false
  updateListActive(id, active)
}

const updateListActive = function (id, active) {
  listApi.updateList(id, {'list': {'active': active}})
    .then(listUI.onUpdateSuccess)
    .catch(listUI.onUpdateFailure)
}

const toggleShownLists = function (event) {
  event.preventDefault()
  switch (this.attributes['data-show'].value) {
    case 'active': {
      $('#content h3').text('Now showing all lists')
      $('a[data-show]').text('Show active only')
      this.attributes['data-show'].value = 'all'
      $('div[data-list]').removeClass('hidden')
      break
    }
    case 'all': {
      $('#content h3').text('Now showing only active lists')
      $('a[data-show]').text('Show all')
      this.attributes['data-show'].value = 'active'
      $('div[data-list][data-list="false"]').addClass('hidden')
      break
    }
  }
}

const createNewList = function (event) {
  event.preventDefault()
  const data = getFormFields(this)
  listApi.createList(data)
    .then(listUI.onCreateSuccess)
    .catch(listUI.onCreateFailure)
}

const createNewItem = function (event) {
  event.preventDefault()
  const data = getFormFields(this)
  itemApi.createItem(data)
    .then(itemUI.onCreateSuccess)
    .catch(itemUI.onCreateFailure)
}

const editList = function (event) {
  const id = this.attributes['data-listid'].value
  listApi.getList(id)
    .then(listUI.onGetSuccess)
    .catch(listUI.onGetFailure)
}

const toggleListGroupEdit = function (event) {
  const dataNote = event.target.attributes['data-note'].value
  switch (dataNote) {
    case 'edit-group': {
      $('p[data-note="edit-group"]').addClass('hidden')
      $('input[data-note="edit-group"]').removeClass('hidden')
      $('a[data-note="edit-group"]').text('Save').attr('data-note', 'save-group')
      break
    }
    case 'save-group': {
      const baseName = $('input[data-base]').attr('data-base')
      const saveName = $('input[data-base]').val()
      $('p[data-note="edit-group"]').removeClass('hidden')
      $('input[data-note="edit-group"]').addClass('hidden')
      $('a[data-note="save-group"]').text('Change').attr('data-note', 'edit-group')
      if (baseName !== saveName) {
        const data = {'list': { 'name': saveName }}
        const id = $('#content div[data-id]').attr('data-id')
        listApi.updateList(id, data)
          .then(listUI.onUpdateSuccess)
          .catch(listUI.onUpdateFailure)
      }
      break
    }
  }
}

const editListRow = function (event) {
  const cause = $(event.target).text()
  const listitem = $(event.target).attr('data-listitem')
  const itemId = $(event.target).attr('data-item')
  const listId = $(event.target).closest('table').attr('data-list')
  switch (cause) {
    case 'Edit': {
      $('p[data-note="edit-li"][data-listitem="' + listitem + '"]').addClass('hidden')
      $('input[data-note="edit-li"][data-listitem="' + listitem + '"]').removeClass('hidden')
      $('a[data-note="edit-li"][data-listitem="' + listitem + '"]').text('Save').attr('data-note', 'save-li')
      $(event.target).removeClass('btn-warning').addClass('btn-success')
      $(event.target).text('Save')
      break
    }
    case 'Save': {
      const saveValue = $('input[data-note="edit-li"][data-listitem="' + listitem + '"]').val()
      const data = {'list_item': { 'list_id': listId, 'item_id': itemId, 'purchased': false, 'quantity': saveValue }}
      liApi.onUpdate(listitem, data)
        .then(liUI.onUpdateSuccess)
        .catch(liUI.onUpdateFailure)
      break
    }
    default: {
      $('tr[data-listitem="' + listitem + '"]').remove()
      liApi.deleteListItem(listitem)
        .then(liUI.onDeleteSuccess)
        .catch(liUI.onDeleteFailure)
      break
    }
  }
}

const addItemToList = function (event) {
  event.preventDefault()
  const itemID = $(event.target).attr('data-item')
  $('tr[data-item="' + itemID + '"]').removeClass('hidden')
  $('td[data-item="' + itemID + '"]').attr('data-content', 'target')
  if (store.list) {
    listApi.getList(store.list)
      .then(listUI.onToList)
      .catch(listUI.onIndexFailure)
  } else {
    listApi.indexLists()
      .then(listUI.onListNames)
      .catch(listUI.onIndexFailure)
  }
}

const showQuantity = function (event) {
  const row = $(event.target).attr('data-showedit')
  $('tr[data-row="' + row + '"] td').removeClass('hidden')
  $(event.target).removeClass('btn-success').addClass('btn-secondary')
}

const appendItemToList = function (event) {
  const listId = $(event.target).attr('data-to')
  const itemId = $(event.target).closest('table').parent().attr('data-item')
  const quantity = $(event.target).parent().prev().children('input').val()
  const data = {'list_item': { 'list_id': listId, 'item_id': itemId, 'purchased': false, 'quantity': quantity }}
  liApi.onAddItemToList(data)
    .then(liUI.onCreateSuccess)
    .catch(liUI.onCreateFailure)
}

const searchItems = function (event) {
  const searchBase = $(event.target).attr('data-search')
  const searchCriteria = $('input[data-search="' + searchBase + '"]').val()
  switch (searchBase) {
    case 'items': {
      itemApi.onSearchItems(searchCriteria)
        .then(itemUI.onSearchSuccess)
        .catch(itemUI.onSearchFailure)
      break
    }
  }
}

const onIndexItems = function (event) {
  event.preventDefault()
  itemApi.indexItems()
    .then(itemUI.onIndexSuccess)
    .catch(itemUI.onIndexFailure)
}

const searchToList = function (event) {
  store.list = $(event.target).closest('div').attr('data-id')
  handlebars.searchItems()
}

const newToList = function (event) {
  store.list = $(event.target).closest('div').attr('data-id')
  handlebars.newItem()
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
  $('#content').on('click', 'a[data-note]', toggleListGroupEdit)
  $('#content').on('click', 'button[data-listid]', editList)
  $('#content').on('submit', '#new-list-form', createNewList)
  $('#content').on('submit', '#new-item-form', createNewItem)
  $('#content').on('click', 'button[data-note="edit-li"]', editListRow)
  $('#content').on('click', 'button[data-item]', addItemToList)
  $('#content').on('click', 'button[data-function="quantity"]', showQuantity)
  $('#content').on('click', 'button[data-to]', appendItemToList)
  $('#content').on('click', 'button[data-search]', searchItems)
  $('#content').on('click', 'button[data-list].btn-info', toggleListActive)
  $('#content').on('click', 'button[data-item-index]', onIndexItems)
  $('#content').on('click', 'button[data-add-search]', searchToList)
  $('#content').on('click', 'button[data-add-new]', newToList)
}

module.exports = {
  addHandlers
}
