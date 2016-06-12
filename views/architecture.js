const document = require('global/document')
const sf = require('sheetify')
const path = require('path')
const view = require('bel')
const fs = require('fs')

const svg = fs
  .readFileSync(path.join(__dirname, '../assets/architecture.svg'), 'utf8')


const id = sf`
  svg {
    transform: scale3d(1.3, 1.3, 1);
  }
`

module.exports = footer

const bgColor = '#f5f5f5'

function footer () {
  return view`
    <section
      class="flex justify-center mx-auto ${id}"
      style="background-color: ${bgColor}">
      ${createContent(svg)}
    </section>
  `
}

// select
function createContent (content) {
  const div = document.createElement('div')
  div.innerHTML = content
  return div.childNodes[0]
}
