const expect = require('chai').expect
const mongoose = require('mongoose')
const mongoUnit = require('./server')
const service = require('./service')
const testMongoUrl = process.env.MONGO_URL

describe('service', () => {
  const testData = require('./testData.json')
  beforeEach(() => mongoUnit.initDb(testMongoUrl, testData))

  it('should find all tasks', () => {
    return service.getAttractions()
      .then(attractions => {
        console.log(attractions)
        expect(attractions.length).to.equal(1)
        expect(attractions[0].name).to.equal('Stealth')
      })
  })
})
