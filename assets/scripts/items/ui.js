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

const onCreateSuccess = function (response, status, xhr) {
  if (store.list) {
    const data = {'list_item': { 'list_id': store.list, 'item_id': response.item.id, 'purchased': false, 'quantity': 1 }}
    liApi.onAddItemToList(data)
      .then(liUI.onCreateSuccess)
      .catch(liUI.onCreateFailure)
  } else {
    $('#new-item-response').empty()
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
  onCreateSuccess,
  onCreateFailure
}
