const sf = require('sheetify')
const view = require('bel')

const id = sf`
  @media (max-width: 40em) {
    :host > div {
      flex-direction: column;
    }
  }
`

const content = [
  { name: 'pull-stream', url: 'https://github.com/pull-stream/pull-stream' },
  { name: 'stack.gl', url: 'http://stack.gl' },
  { name: 'yo-yo', url: 'https://github.com/maxogden/yo-yo' },
  { name: 'bel', url: 'https://github.com/shama/bel' },
  { name: 'lebron', url: 'http://lebron.technology' },
  { name: 'sheetify', url: 'https://github.com/stackcss/sheetify' },
  { name: 'standard', url: 'http://standardjs.com' },
  { name: 'tachyons', url: 'http://tachyons.io' },
  { name: 'basscss', url: 'http://www.basscss.com' },
  { name: 'stackcss', url: 'https://github.com/stackcss' }
]

module.exports = relatedView

const bgColor = '#fff'
const title = 'Friends'

function relatedView () {
  return view`
    <section
      class="${id} flex justify-center mx-auto"
      style="background-color: ${bgColor}">
      <div class="flex left-align px2 max-width-2">
        <h1 class="f3 mr4 mb2 bold code lh-copy">${title}</h1>
        <div>
          ${createList(content)}
        </div>
      </div>
    </section>
  `
}

function createList (data) {
  return data.map((pair) => {
    return view`
      <a href=${pair.url} class="col-6 inline-block f3 f4-ns code lh-copy">
        ${pair.name}
      </a>
    `
  })
}
