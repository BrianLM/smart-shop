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
  console.log(`In onIndex failure, response is ${response}`)
  console.log(`In onIndex failure, status is ${status}`)
  console.log(`In onIndex failure, xhr is ${xhr}`)
}

const onSearchSuccess = function (response, status, xhr) {
  handlebars.searchItemResults(response.items)
}
const onSearchFailure = function (response, status, xhr) {
  console.log(`In onSearch failure, response is ${response}`)
  console.log(`In onSearch failure, status is ${status}`)
  console.log(`In onSearch failure, xhr is ${xhr}`)
}

const onCreateSuccess = function (response, status, xhr) {
  const data = {'list_item': { 'list_id': store.list, 'item_id': response.item.id, 'purchased': false, 'quantity': 1 }}
  liApi.onAddItemToList(data)
    .then(liUI.onCreateSuccess)
    .catch(liUI.onCreateFailure)
}

const onCreateFailure = function (response, status, xhr) {
  console.log(`In onCreate failure, response is ${response}`)
  console.log(`In onCreate failure, status is ${status}`)
  console.log(`In onCreate failure, xhr is ${xhr}`)
}

module.exports = {
  onIndexSuccess,
  onIndexFailure,
  onSearchSuccess,
  onSearchFailure,
  onCreateSuccess,
  onCreateFailure
}
