const expect = require('chai').expect
const mongoose = require('mongoose')
const mongoUnit = require('./test-helpers')
const service = require('../service')
const testMongoUrl = process.env.MONGO_URL

describe('service', () => {
  const testData = require('../testData.json')
  beforeEach(() => mongoUnit.initDb(testMongoUrl, testData))
  afterEach(() => mongoUnit.dropDb(testMongoUrl))

  it('should find all attractions', () => {
    return service.getAttractions()
      .then(attractions => {
        console.log(attractions)
        expect(attractions.length).to.equal(1)
        expect(attractions[0].park).to.equal('thorpe park')
        expect(attractions[0].name).to.equal('Stealth')
        expect(attractions[0].thrill).to.equal(5)
        expect(attractions[0].ridetime).to.equal('00:45')
        expect(attractions[0].minheight).to.equal('1.4m')
      })
  })

  it('should find all facilities', () => {
    return service.getFacilities()
      .then(facilities => {
        console.log(facilities)
        expect(facilities[0].type).to.equal('Toilet')
      })
  })
})
