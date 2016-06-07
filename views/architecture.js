const view = require('bel')

const content = `
 ┌───────────────────────────┐     ┌────────┐
 │    ┌─────────────────┐    │     │  User  │
 ├────│  Subscriptions  │    │     └────────┘
 │    ├─────────────────┤    │          │
 └────│     Effects     │◀───┤          ▼
      ├─────────────────┤  Actions ┌────────┐
      │    Reducers     │◀───┴─────│  DOM   │
    Models──────────────┘          └────────┘
               │                        ▲
             State                   DOM│tree
               ▼                        │
          ┌────────┐               ┌────────┐
          │ Router │─────State ───▶│ Views  │
          └────────┘               └────────┘
`

module.exports = footer

const bgColor = '#f5f5f5'

function footer () {
  return view`
    <section
      class="flex justify-center mx-auto"
      style="background-color: ${bgColor}">
      <div class="left-align px2 overflow-auto">
        <pre class="f6 code lh-copy">
          ${content}
        </pre>
      </div>
    </section>
  `
}
