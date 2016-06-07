const sf = require('sheetify')
const choo = require('choo')

const wrapRoot = require('./elements/wrap-root')

sf('css-wipe')
sf('basscss')
sf('tachyons-type-scale')
sf('tachyons-font-family')
sf('tachyons-line-height')

const app = choo()

app.router((route) => [
  route('/', wrapRoot([
    require('./views/headline'),
    require('./views/train'),
    require('./views/about'),
    require('./views/stats'),
    require('./views/architecture'),
    require('./views/related'),
    require('./views/footer')
  ]))
])

const tree = app.start('#app-root')
document.body.appendChild(tree)
