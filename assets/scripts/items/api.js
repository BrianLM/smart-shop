'use strict'
const config = require('../config')
const store = require('../store.js')

const indexItems = function () {
  return $.ajax({
    url: config.apiOrigin + '/items',
    method: 'get',
    headers: {
      Authorization: 'Token token=' + store.user.token
    }
  })
}

const onSearchItems = function (data) {
  return $.ajax({
    url: config.apiOrigin + '/search_items/' + data,
    method: 'get',
    headers: {
      Authorization: 'Token token=' + store.user.token
    }
  })
}

module.exports = {
  indexItems,
  onSearchItems
}
