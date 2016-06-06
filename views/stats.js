const view = require('bel')

module.exports = statsView

function statsView () {
  return view`
    <section
      class="flex justify-center items-center flex-column center mx-auto"
      style="max-width: 400px;"
      >
    hey
    </section>
  `
}
