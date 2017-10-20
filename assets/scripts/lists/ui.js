'use strict'
const store = require('../store.js')
const handlebars = require('../handlebars.js')

const onIndexSuccess = function (response, status, xhr) {
  handlebars.indexLists(response.lists)
}
const onIndexFailure = function (response, status, xhr) {
  console.log(`In onIndex failure, response is ${response}`)
  console.log(`In onIndex failure, status is ${status}`)
  console.log(`In onIndex failure, xhr is ${xhr}`)
}

module.exports = {
  onIndexSuccess,
  onIndexFailure
}
