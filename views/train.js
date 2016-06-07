const assert = require('assert')
const view = require('bel')

module.exports = trainView

const bgColor = '#fff'
const maxTrains = 7

function trainView () {
  return view`
    <section
      class="flex justify-center mx-auto"
      style="background-color: ${bgColor}">
      <div class="left-align px2 f3 f3-ns center">
        ${createTrain(trainCount(maxTrains))}
      </div>
    </section>
  `
}

function trainCount (max) {
  return Math.round(Math.random() * max)
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
