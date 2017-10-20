'use strict'
const store = require('../store.js')
const handlebars = require('../handlebars.js')

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

module.exports = {
  onDeleteSuccess,
  onDeleteFailure
}
