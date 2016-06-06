const view = require('bel')

const content = `
  Choo is a cute little framework that does more with less. It's fun, fast, and
  packs a functional lil' architecture. It can be rendered anywhere and runs
  real smooth.
`

module.exports = footer

const bgColor = '#f5f5f5'

function footer () {
  return view`
    <section
      class="flex justify-center mx-auto center"
      style="background-color: ${bgColor}">
      <p class="f3 f4-ns code lh-copy left-align px2 max-width-2">
        ${content}
      </p>
    </section>
  `
}
