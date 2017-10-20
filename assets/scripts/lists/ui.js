'use strict'
const store = require('../store.js')

const onIndexSuccess = function (response, status, xhr) {
  console.log(`In onIndexSuceess, response is ${response}`)
  console.log(`In onIndexSuceess, status is ${status}`)
  console.log(`In onIndexSuceess, xhr is ${xhr}`)
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
