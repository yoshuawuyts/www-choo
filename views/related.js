const view = require('bel')

const content = `
`

module.exports = relatedView

const bgColor = '#fff'

function relatedView () {
  return view`
    <section
      class="flex justify-center mx-auto"
      style="background-color: ${bgColor}">
      <div class="left-align px2" style="width: 32rem;">
        <pre class="f6 code lh-copy">
          ${content}
        </pre>
      </div>
    </section>
  `
}
