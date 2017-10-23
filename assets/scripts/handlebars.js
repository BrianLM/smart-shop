const showIndexItemsTemplate = require('./templates/index-items.handlebars')
const showIndexListTemplate = require('./templates/index-lists.handlebars')
const showNewItemTemplate = require('./templates/new-item.handlebars')
const showNewListTemplate = require('./templates/new-list.handlebars')
const showSearchItemTemplate = require('./templates/search-items.handlebars')
const showEditListTemplate = require('./templates/edit-list.handlebars')
const showListPartialTemplate = require('./templates/list-partial.handlebars')
const showSearchResultsTemplate = require('./templates/search-results.handlebars')

const store = require('./store.js')

const indexItems = function (data) {
  clearContent()
  const showNewItemHtml = showIndexItemsTemplate({items: data})
  $('#content').append(showNewItemHtml)
}

const indexLists = function (data) {
  clearContent()
  const showIndexListsHtml = showIndexListTemplate({lists: data})
  $('#content').append(showIndexListsHtml)
}

const newItem = function () {
  clearContent()
  const showNewItemHtml = showNewItemTemplate()
  $('#content').append(showNewItemHtml)
}

const newList = function () {
  clearContent()
  const showNewlistHtml = showNewListTemplate()
  $('#content').append(showNewlistHtml)
}

const searchItems = function (data) {
  clearContent()
  const showSearchItemsHtml = showSearchItemTemplate({'list': store.list})
  $('#content').append(showSearchItemsHtml)
}

const searchItemResults = function (data) {
  const showSearchResultsHtml = showSearchResultsTemplate({items: data})
  $('div[data-results="items"]').empty()
  $('div[data-results="items"]').append(showSearchResultsHtml)
}

const editList = function (data) {
  clearContent()
  store.list = null
  const showEditListHtml = showEditListTemplate({list: data})
  $('#content').append(showEditListHtml)
}

const partialList = function (data) {
  const showListPartialHtml = showListPartialTemplate({lists: data})
  $('td[data-content="target"]').append(showListPartialHtml)
}

const clearContent = function () {
  $('#content').empty()
}

module.exports = {
  indexLists,
  indexItems,
  newItem,
  newList,
  editList,
  searchItems,
  partialList,
  searchItemResults
}
