'use strict'
const store = require('../store.js')
const handlebars = require('../handlebars.js')

const onIndexSuccess = function (response, status, xhr) {
  handlebars.indexLists(response.lists)
}

const onListNames = function (response, status, xhr) {
  handlebars.partialList(response.lists)
}

const onIndexFailure = function (response, status, xhr) {
  console.log(`In onIndex failure, response is ${response}`)
  console.log(`In onIndex failure, status is ${status}`)
  console.log(`In onIndex failure, xhr is ${xhr}`)
}

const onGetSuccess = function (response, status, xhr) {
  handlebars.editList(response.list)
}

const onGetFailure = function (response, status, xhr) {
  console.log(`In onGet failure, response is ${response}`)
  console.log(`In onGet failure, status is ${status}`)
  console.log(`In onGet failure, xhr is ${xhr}`)
}

const onCreateSuccess = function (response, status, xhr) {
  handlebars.editList(response.list)
}

const onCreateFailure = function (response, status, xhr) {
  console.log(`In onCreate failure, response is ${response}`)
  console.log(`In onCreate failure, status is ${status}`)
  console.log(`In onCreate failure, xhr is ${xhr}`)
}

const onUpdateSuccess = function (response, status, xhr) {
  $('span[data-id="group-name"]').text(response.list.name)
}

const onUpdateFailure = function (response, status, xhr) {
  console.log(`In onUpdate failure, response is ${response}`)
  console.log(`In onUpdate failure, status is ${status}`)
  console.log(`In onUpdate failure, xhr is ${xhr}`)
}

module.exports = {
  onIndexSuccess,
  onIndexFailure,
  onCreateSuccess,
  onCreateFailure,
  onGetSuccess,
  onGetFailure,
  onUpdateSuccess,
  onUpdateFailure,
  onListNames
}
