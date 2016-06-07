const view = require('bel')

const content = [
  { name: 'pull-stream', url: 'https://github.com/pull-stream/pull-stream' },
  { name: 'stack.gl', url: 'http://stack.gl' },
  { name: 'yo-yo', url: 'https://github.com/maxogden/yo-yo' },
  { name: 'bel', url: 'https://github.com/shama/bel' }
]

module.exports = relatedView

const bgColor = '#fff'
const title = 'Friends'

function relatedView () {
  return view`
    <section
      class="flex justify-center mx-auto"
      style="background-color: ${bgColor}">
      <div class="flex left-align px2 max-width-2">
        <h1 class="f3 bold code mr4 lh-copy">${title}</h1>
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
