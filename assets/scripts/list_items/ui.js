'use strict'
// const store = require('../store.js')
// const handlebars = require('../handlebars.js')
const listsApi = require('../lists/api.js')
const listsUi = require('../lists/ui.js')

const onDeleteSuccess = function (response, status, xhr) {
}

const onDeleteFailure = function (response, status, xhr) {
}

const onCreateSuccess = function (response, status, xhr) {
  listsApi.getList(response.list_item.list.id)
    .then(listsUi.onGetSuccess)
    .catch(listsUi.onGetFailure)
}

const onCreateFailure = function (response, status, xhr) {
}

const onUpdateSuccess = function (response, status, xhr) {
  listsApi.getList(response.list_item.list.id)
    .then(listsUi.onGetSuccess)
    .catch(listsUi.onGetFailure)
}

const onUpdateFailure = function (response, status, xhr) {
}

module.exports = {
  onDeleteSuccess,
  onDeleteFailure,
  onCreateSuccess,
  onCreateFailure,
  onUpdateSuccess,
  onUpdateFailure
}
