const document = require('global/document')
const path = require('path')
const view = require('bel')
const fs = require('fs')

const svg = fs
  .readFileSync(path.join(__dirname, '../assets/architecture.svg'), 'utf8')

module.exports = footer

const bgColor = '#f5f5f5'

function footer () {
  return view`
    <section
      class="flex justify-center mx-auto"
      style="background-color: ${bgColor}">
      <div class="left-align px2 overflow-auto">
        ${createContent(svg)}
      </div>
    </section>
  `
}

// select
function createContent (content) {
  const div = document.createElement('div')
  div.innerHTML = content
  return div.childNodes[0]
}
