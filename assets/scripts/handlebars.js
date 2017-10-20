const showIndexItemsTemplate = require('./templates/index-items.handlebars')
const showIndexListTemplate = require('./templates/index-lists.handlebars')
const showIndexPurchasesTemplate = require('./templates/index-purchases.handlebars')
const showNewItemTemplate = require('./templates/new-item.handlebars')
const showNewListTemplate = require('./templates/new-list.handlebars')
const showSearchItemTemplate = require('./templates/search-items.handlebars')
const showEditListTemplate = require('./templates/edit-list.handlebars')

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

const indexPurchases = function (data) {
  clearContent()
  const showIndexPurchaseHtml = showIndexPurchasesTemplate(data)
  $('#content').append(showIndexPurchaseHtml)
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
  const showSearchItemsHtml = showSearchItemTemplate(data)
  $('#content').append(showSearchItemsHtml)
}

const editList = function (data) {
  clearContent()
  const showEditListHtml = showEditListTemplate({list: data})
  $('#content').append(showEditListHtml)
}

const clearContent = function () {
  $('#content').empty()
}

module.exports = {
  indexLists,
  indexItems,
  indexPurchases,
  newItem,
  newList,
  editList,
  searchItems
}
