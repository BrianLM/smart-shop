'use strict'
// const store = require('../store.js')
// const handlebars = require('../handlebars.js')
const listsApi = require('../lists/api.js')
const listsUi = require('../lists/ui.js')

const onDeleteSuccess = function (response, status, xhr) {
  console.log(`In onDelete success, response is ${response}`)
  console.log(`In onDelete success, status is ${status}`)
  console.log(`In onDelete success, xhr is ${xhr}`)
}

const onDeleteFailure = function (response, status, xhr) {
  console.log(`In onDelete failure, response is ${response}`)
  console.log(`In onDelete failure, status is ${status}`)
  console.log(`In onDelete failure, xhr is ${xhr}`)
}

const onCreateSuccess = function (response, status, xhr) {
  listsApi.getList(response.list_item.list.id)
    .then(listsUi.onGetSuccess)
    .catch(listsUi.onGetFailure)
}

const onCreateFailure = function (response, status, xhr) {
  console.log(`In onCreate failure, response is ${response}`)
  console.log(`In onCreate failure, status is ${status}`)
  console.log(`In onCreate failure, xhr is ${xhr}`)
}

module.exports = {
  onDeleteSuccess,
  onDeleteFailure,
  onCreateSuccess,
  onCreateFailure
}
