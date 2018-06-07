const Nightmare = require('nightmare')
const assert = require('assert')

describe('Load a Page', function () {
  this.timeout('30s')

  let nightmare = null
  beforeEach(() => {
    nightmare = new Nightmare()
  })

  describe('home', () => {
    it('should load without error', done => {
      nightmare.goto('http://localhost:3000/')
        .end()
        .then(function (result) { done() })
        .catch(done)
    })
  })
  describe('gallery', () => {
    it('should load without error', done => {
      nightmare.goto('http://localhost:3000/puppies')
        .end()
        .then(function (result) { done() })
        .catch(done)
    })
  })
  describe('adopt', () => {
    it('should load without error', done => {
      nightmare.goto('http://localhost:3000/adopt')
        .end()
        .then(function (result) { done() })
        .catch(done)
    })
  })
  describe('form', () => {
    it('should load without error', done => {
      nightmare.goto('http://localhost:3000/shelter')
        .end()
        .then(function (result) { done() })
        .catch(done)
    })
  })
  describe('search and delete', () => {
    it('should load without error', done => {
      nightmare.goto('http://localhost:3000/search')
        .end()
        .then(function (result) { done() })
        .catch(done)
    })
  })
})

describe('User pages', function () {
  this.timeout('60s')

  let nightmare = null
  nightmare = new Nightmare({ show: true })

  describe('find a dog', () => {
    it('should work without timing out', done => {
      nightmare
        .goto('http://localhost:3000/')
        .wait(3000)
        .click('#button1')
        .wait(2000)
        .click('#next')
        .wait(2000)
        .click('#next')
        .wait(2000)
        .click('#next')
        .wait(2000)
        .click('#next')
        .wait(2000)
        .click('#next')
        .wait(2000)
        .click('#next')
        .wait(2000)
        .click('#previous')
        .wait(2000)
        .click('#previous')
        .wait(2000)
      nightmare.evaluate(() => {
        $('button[id="5"]').click();
      })
        .wait(2000)
        .click('#homeButton')
        .wait(2000)
        .click('.goToShelter')
        .wait(2000)
        .then(result => { done() })
        .catch(done)
    })
  })
  describe('enter dog', () => {
    it('should load without error', done => {
      nightmare.goto('http://localhost:3000/shelter')
        .type('#name', 'Mr. Floof')
        .type('#breed', 'Chocolate Lab')
        .type('#gender', 'Male')
        .type('#age', '4')
        .type('#location', 'ABC Shelter')
        .type('#image', 'https://images.pexels.com/photos/298062/pexels-photo-298062.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260')
        .type('#info', 'Loves to drool!')
        .wait(2000)
        .click('#shelSubmit')
        .wait(2000)
        .then(function (result) { done() })
        .catch(done)
    })
  })
  describe('view new dog', () => {
    it('should load without error', done => {
      nightmare.goto('http://localhost:3000/shelter')
        .click('#gallery')
        .wait(2000)
        .click('#previous')
        .wait(2000)
        .click('.goToShelter')
        .wait(2000)
        .click('#search')
        .wait(2000)
        .then(function (result) { done() })
        .catch(done)
    })
  })
  describe('delete dog', () => {
    it('should load without error', done => {
      nightmare.goto('http://localhost:3000/search')
        .type('#idNumber', '7')
        .click('#searchSubmit')
        .wait(2000)
        .click('#deleteButton')
        .wait(3000)
        .end()
        .then(function (result) { done() })
        .catch(done)
    })
  })
})

