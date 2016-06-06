const view = require('bel')

module.exports = headlineView

function headlineView () {
  const headline = [
    view`<span>CH</span>`,
    view`<span style="letter-spacing: -0.1em;"> </span>`,
    view`<span>O</span>`,
    view`<span style="letter-spacing: 0.05em;"> </span>`,
    view`<span> O</span>`
  ]

  const subheadline = 'Sturdy frontend framework'.toUpperCase()

  return view`
    <section style="background-color: rgb(255, 195, 228)">
      <div
        class="flex justify-center items-center flex-column center mx-auto"
        style="max-width: 400px; height: 95vh;"
        >
        <h1 class="f-headline bold sans-serif mb4">${headline}</h1>
        <h2 class="f1 bold code">${subheadline}</h2>
      </div>
    </section>
  `
}
