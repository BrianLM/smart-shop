'use strict'
// const store = require('../store.js')
const handlebars = require('../handlebars.js')

const onIndexSuccess = function (response, status, xhr) {
  handlebars.indexItems(response.items)
}
const onIndexFailure = function (response, status, xhr) {
  console.log(`In onIndex failure, response is ${response}`)
  console.log(`In onIndex failure, status is ${status}`)
  console.log(`In onIndex failure, xhr is ${xhr}`)
}

const onSearchSuccess = function (response, status, xhr) {
  handlebars.searchItemResults(response.items)
}
const onSearchFailure = function (response, status, xhr) {
  console.log(`In onSearch failure, response is ${response}`)
  console.log(`In onSearch failure, status is ${status}`)
  console.log(`In onSearch failure, xhr is ${xhr}`)
}

module.exports = {
  onIndexSuccess,
  onIndexFailure,
  onSearchSuccess,
  onSearchFailure
}
