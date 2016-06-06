const sf = require('sheetify')
const choo = require('choo')

sf('css-wipe')
sf('basscss')
sf('tachyons-type-scale')
sf('tachyons-font-family')
sf('tachyons-line-height')

const headlineView = require('./views/headline')
const statsView = require('./views/stats')
const footerView = require('./views/footer')

const wrapRoot = require('./elements/wrap-root')

const app = choo()

app.router((route) => [
  route('/', wrapRoot([
    headlineView,
    statsView,
    footerView
  ]))
])

const tree = app.start('#app-root')
document.body.appendChild(tree)
