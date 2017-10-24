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

const createItem = function (data) {
  return $.ajax({
    url: config.apiOrigin + '/items',
    method: 'post',
    data: data,
    headers: {
      Authorization: 'Token token=' + store.user.token
    }
  })
}

const onUpdate = function (id, data) {
  return $.ajax({
    url: config.apiOrigin + '/items/' + id,
    method: 'patch',
    data: data,
    headers: {
      Authorization: 'Token token=' + store.user.token
    }
  })
}

const getItem = function (id) {
  return $.ajax({
    url: config.apiOrigin + '/items/' + id,
    method: 'get',
    headers: {
      Authorization: 'Token token=' + store.user.token
    }
  })
}

module.exports = {
  indexItems,
  onSearchItems,
  createItem,
  onUpdate,
  getItem
}
