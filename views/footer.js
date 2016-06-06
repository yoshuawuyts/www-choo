const view = require('bel')

module.exports = footer

const yoshUrl = 'https://twitter.com/yoshuawuyts'
const contribUrl = 'https://github.com/yoshuawuyts/choo/graphs/contributors'
const bgColor = '#f5f5f5'

function footer () {
  return view`
    <section class="center" style="background-color: ${bgColor}">
      <div class="code f5 lh-copy">
        The little framework that could.
      </div>
      <div class="code f5 lh-copy">
        <span>Built with ❤︎ by </span>
        <a href=${yoshUrl}>Yoshua Wuyts</a>
        <span>and </span>
        <a href=${contribUrl}>contributors</a>
      </div>
    </section>
  `
}
