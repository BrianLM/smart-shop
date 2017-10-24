const showIndexItemsTemplate = require('./templates/index-items.handlebars')
const showIndexListTemplate = require('./templates/index-lists.handlebars')
const showNewItemTemplate = require('./templates/new-item.handlebars')
const showNewListTemplate = require('./templates/new-list.handlebars')
const showSearchItemTemplate = require('./templates/search-items.handlebars')
const showEditListTemplate = require('./templates/edit-list.handlebars')
const showListPartialTemplate = require('./templates/list-partial.handlebars')
const showSearchResultsTemplate = require('./templates/search-results.handlebars')
const showEditItemTemplate = require('./templates/edit-item.handlebars')

const store = require('./store.js')

const indexItems = function (data) {
  const showNewItemHtml = showIndexItemsTemplate({items: data})
  showContent(showNewItemHtml)
}

const indexLists = function (data) {
  const showIndexListsHtml = showIndexListTemplate({lists: data})
  showContent(showIndexListsHtml)
}

const newItem = function () {
  const showNewItemHtml = showNewItemTemplate()
  showContent(showNewItemHtml)
}

const newList = function () {
  const showNewlistHtml = showNewListTemplate()
  showContent(showNewlistHtml)
}

const searchItems = function (data) {
  const showSearchItemsHtml = showSearchItemTemplate({'list': store.list})
  showContent(showSearchItemsHtml)
}

const editItem = function (data) {
  const showEditItemHtml = showEditItemTemplate({'item': data})
  showContent(showEditItemHtml)
}

const searchItemResults = function (data) {
  const showSearchResultsHtml = showSearchResultsTemplate({items: data})
  $('div[data-results="items"]').empty()
  $('div[data-results="items"]').append(showSearchResultsHtml)
}

const editList = function (data) {
  store.list = null
  const showEditListHtml = showEditListTemplate({list: data})
  showContent(showEditListHtml)
}

const partialList = function (data) {
  const showListPartialHtml = showListPartialTemplate({lists: data})
  $('td[data-content="target"]').empty()
  $('td[data-content="target"]').append(showListPartialHtml)
}

const showContent = function (html) {
  $('#content').empty()
  $('#content').append(html)
}

module.exports = {
  indexLists,
  indexItems,
  newItem,
  newList,
  editList,
  searchItems,
  partialList,
  searchItemResults,
  editItem
}
