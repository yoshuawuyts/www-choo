const assert = require('assert')
const sf = require('sheetify')
const view = require('bel')

const id = sf`
  :host > section {
    margin-bottom: 4rem;
  }
`

module.exports = wrapRoot

function wrapRoot (views) {
  assert.ok(Array.isArray(views), 'wrap-root: views must be an array')
  return (params, state, send) => view`
    <div id="#app-root" class=${id}>
      ${views.map((view) => view(params, state, send))}
    </div>
  `
}
