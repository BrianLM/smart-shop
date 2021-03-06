'use strict'
// const store = require('../store.js')
const handlebars = require('../handlebars.js')
const liApi = require('../list_items/api.js')
const liUI = require('../list_items/ui.js')
const store = require('../store.js')

const onIndexSuccess = function (response, status, xhr) {
  handlebars.indexItems(response.items)
}
const onIndexFailure = function (response, status, xhr) {
}

const onSearchSuccess = function (response, status, xhr) {
  handlebars.searchItemResults(response.items)
}
const onSearchFailure = function (response, status, xhr) {
}

const onGetSuccess = function (response, status, xhr) {
  handlebars.editItem(response.item)
}
const onGetFailure = function (response, status, xhr) {
}

const onUpdateSuccess = function (response, status, xhr) {
  $('#nav-index-items').trigger('click')
}
const onUpdateFailure = function (response, status, xhr) {
}

const onCreateSuccess = function (response, status, xhr) {
  if (store.list) {
    const data = {'list_item': { 'list_id': store.list, 'item_id': response.item.id, 'purchased': false, 'quantity': 1 }}
    liApi.onAddItemToList(data)
      .then(liUI.onCreateSuccess)
      .catch(liUI.onCreateFailure)
  } else {
    $('#new-item-response').empty()
    $('#new-item-form input[type="text"]').val('')
    $('#new-item-form input[type="number"]').val('')
    const html = '</p>Your new item, <strong>' + response.item.name + '</strong>, has been saved.</p>'
    $('#new-item-response').append(html)
  }
}

const onCreateFailure = function (response, status, xhr) {
}

module.exports = {
  onIndexSuccess,
  onIndexFailure,
  onSearchSuccess,
  onSearchFailure,
  onGetSuccess,
  onGetFailure,
  onUpdateSuccess,
  onUpdateFailure,
  onCreateSuccess,
  onCreateFailure
}
