const showIndexItemsTemplate = require('./templates/index-items.handlebars')
const showIndexListTemplate = require('./templates/index-lists.handlebars')
const showIndexPurchasesTemplate = require('./templates/index-purchases.handlebars')
const showNewItemTemplate = require('./templates/new-item.handlebars')
const showNewListTemplate = require('./templates/new-list.handlebars')
const showSearchItemTemplate = require('./templates/search-items.handlebars')

const indexItems = function (data) {
  clearContent()
  const showNewItemHtml = showIndexItemsTemplate({items: data})
  $('#content').append(showNewItemHtml)
}

const indexLists = function (data) {
  console.log('Index lists received')
  console.log(data)
  clearContent()
  const showNewItemHtml = showIndexListTemplate({lists: data})
  $('#content').append(showNewItemHtml)
}

const indexPurchases = function (data) {
  clearContent()
  const showNewItemHtml = showIndexPurchasesTemplate(data)
  $('#content').append(showNewItemHtml)
}

const newItem = function () {
  clearContent()
  const showNewItemHtml = showNewItemTemplate()
  $('#content').append(showNewItemHtml)
}

const newList = function () {
  clearContent()
  const showNewItemHtml = showNewListTemplate()
  $('#content').append(showNewItemHtml)
}

const searchItems = function (data) {
  clearContent()
  const showNewItemHtml = showSearchItemTemplate(data)
  $('#content').append(showNewItemHtml)
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
  searchItems
}
