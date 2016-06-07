const assert = require('assert')
const view = require('bel')

module.exports = trainView

const bgColor = '#fff'

function trainView () {
  return view`
    <section
      class="flex justify-center mx-auto"
      style="background-color: ${bgColor}">
      <div class="left-align px2 f3 center">
        ${createTrain(18)}
      </div>
    </section>
  `
}

function createTrain (n) {
  assert.equal(typeof n, 'number')
  var train = '🚂'
  const carriage = '🚋'
  for (var i = 0; i < n; i++) {
    train += carriage
  }
  return train
}
