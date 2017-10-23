'use strict'
const config = require('../config')
const store = require('../store.js')

const indexLists = function () {
  return $.ajax({
    url: config.apiOrigin + '/lists',
    method: 'get',
    headers: {
      Authorization: 'Token token=' + store.user.token
    }
  })
}

const getList = function (id) {
  return $.ajax({
    url: config.apiOrigin + '/lists/' + id,
    method: 'get',
    headers: {
      Authorization: 'Token token=' + store.user.token
    }
  })
}

const deleteList = function (id) {
  return $.ajax({
    url: config.apiOrigin + '/lists/' + id,
    method: 'delete',
    headers: {
      Authorization: 'Token token=' + store.user.token
    }
  })
}

const createList = function (data) {
  return $.ajax({
    url: config.apiOrigin + '/lists',
    method: 'post',
    data: data,
    headers: {
      Authorization: 'Token token=' + store.user.token
    }
  })
}

const updateList = function (id, data) {
  return $.ajax({
    url: config.apiOrigin + '/lists/' + id,
    method: 'patch',
    data: data,
    headers: {
      Authorization: 'Token token=' + store.user.token
    }
  })
}

module.exports = {
  indexLists,
  getList,
  createList,
  updateList,
  deleteList
}
