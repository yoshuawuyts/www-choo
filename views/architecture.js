const document = require('global/document')
const sf = require('sheetify')
const path = require('path')
const view = require('bel')
const fs = require('fs')

const id = sf`
  svg {
    transform: scale3d(1.3, 1.3, 1) translate3d(15%, 0, 0);
  }
`

const svg = fs
  .readFileSync(path.join(__dirname, '../assets/architecture.svg'), 'utf8')

const items = [
  { name: 'Models' },
  { name: 'Actions' },
  { name: 'Effects' },
  { name: 'Subscriptions' },
  { name: 'Router' },
  { name: 'Views' }
]

module.exports = footer

const bgColor = '#f5f5f5'

function footer () {
  return view`
    <section
      class="${id} flex flex-row overflow-auto justify-center items-center mx-auto"
      style="background-color: ${bgColor}">
      ${createList(items)}
      <div class="mr3">
        ${createContent(svg)}
      </div>
    </section>
  `
}

// string to HTML
function createContent (content) {
  const div = document.createElement('div')
  div.innerHTML = content
  return div.childNodes[0]
}

// read data and create kv list
function createList (items) {
  const res = items.map(function (item) {
    return view`
      <li class="code f4 lh-copy">
        <p>${item.name}</p>
      </li>
    `
  })
  return view`<ul class="right-align mr2">${res}</ul>`
}
