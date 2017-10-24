'use strict'
// const store = require('../store.js')
const handlebars = require('../handlebars.js')

const onIndexSuccess = function (response, status, xhr) {
  handlebars.indexLists(response.lists)
}

const onListNames = function (response, status, xhr) {
  handlebars.partialList(response.lists)
}

const onIndexFailure = function (response, status, xhr) {
}

const onGetSuccess = function (response, status, xhr) {
  listDateFix(response.list)
}

const onToList = function (response, status, xhr) {
  handlebars.partialList({'lists': response.list})
}

const onGetFailure = function (response, status, xhr) {
}

const onCreateSuccess = function (response, status, xhr) {
  listDateFix(response.list)
}

const onCreateFailure = function (response, status, xhr) {
}

const onUpdateSuccess = function (response, status, xhr) {
  listDateFix(response.list)
}

const onUpdateFailure = function (response, status, xhr) {
}

const listDateFix = function (data) {
  const date = new Date(data.updated_at)
  data.updated_at = date.toLocaleDateString() + ' at ' + date.toLocaleTimeString()
  handlebars.editList(data)
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
  onListNames,
  onToList
}
