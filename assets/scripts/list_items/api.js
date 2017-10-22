'use strict'
const config = require('../config')
const store = require('../store.js')

const deleteListItem = function (id) {
  return $.ajax({
    url: config.apiOrigin + '/list_items/' + id,
    method: 'DELETE',
    headers: {
      Authorization: 'Token token=' + store.user.token
    }
  })
}

const onAddItemToList = function (data) {
  return $.ajax({
    url: config.apiOrigin + '/list_items',
    method: 'post',
    data: data,
    headers: {
      Authorization: 'Token token=' + store.user.token
    }
  })
}

module.exports = {
  deleteListItem,
  onAddItemToList
}
