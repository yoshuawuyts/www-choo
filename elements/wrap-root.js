const assert = require('assert')
const sf = require('sheetify')
const view = require('bel')

const octo = require('./octo')

const id = sf`
  :host > section {
    margin-bottom: 4rem;
  }
`

module.exports = wrapRoot

function wrapRoot (views) {
  assert.ok(Array.isArray(views), 'wrap-root: views must be an array')
  console.log(octo)
  return (params, state, send) => view`
    <div id="#app-root" class=${id}>
      ${octo()}
      ${views.map((view) => view(params, state, send))}
    </div>
  `
}
