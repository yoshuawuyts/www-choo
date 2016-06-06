const view = require('bel')

module.exports = statsView

const descriptions = [
  { name: 'Lines', value: 237 },
  { name: 'Methods', value: 6 },
  { name: 'Dependencies', value: 6 }
]

const version = 'v2.1.6'
const size = '7.14kb'

function statsView () {
  return view`
    <section
      class="flex flex-column mx-auto"
      style="max-width: 400px;">
      <div class="mb3">
        <h2 class="f1 bold code">Stats</h2>
      </div>
      <div class="mb3">
        <span class="f4 bold mr3 sans-serif">choo</span>
        <span class="f4 bold mr3 sans-serif">${version}</span>
        <span class="f4 bold mr3 sans-serif">${size}</span>
      </div>
      <div class="mb3">
        ${createDescriptions(descriptions)}
      </div>
    </section>
  `
}

function createDescriptions (descriptions) {
  return descriptions.map((description) => {
    return view`
      <dl class="inline-block pr3">
        <dt class="f6 sans-serif">${description.name}</dt>
        <dd class="f4 f2-ns bold lh-title sans-serif">${description.value}</dd>
      </dl>
    `
  })
}
