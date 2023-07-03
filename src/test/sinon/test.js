const assert = require('assert')
const sinon = require("sinon");

function printLastReleaseTimeofTheBook1 (bookName) {
  const now = new Date()
  const date = now.toLocaleDateString('en-US', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })
  return `The ${bookName}! was released  on ${date}`
}


describe('testing the book release date', function () {
  it('printLastReleaseTimeofTheBook function  testing', function () {
    assert.equal(printLastReleaseTimeofTheBook2('HarryPoter'), 'The HarryPoter! was released  on Monday, July 3, 2023')
  })
})

/*
To make this test pass, we need a way to pretend we’re on a different day. */

function printLastReleaseTimeofTheBook2 (bookName) {
  const now = new Date()
  const date = now.toLocaleDateString('en-US', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })
  return `The ${bookName}! was released  on ${date}`
}

describe('testing the book release date:Using sinon', function () {
  it('printLastReleaseTimeofTheBook2 function  testing', function () {
    const clock = sinon.useFakeTimers(new Date(2022, 6, 3));
    assert.equal(printLastReleaseTimeofTheBook2('HarryPoter'), 'The HarryPoter! was released  on Monday, July 3, 2022')
    clock.restore();
  })
})
