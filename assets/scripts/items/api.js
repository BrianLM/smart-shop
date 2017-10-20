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

module.exports = {
  indexLists
}
