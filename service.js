const mongoose = require('mongoose')
const mongoUrl = process.env.MONGO_URL || 'mongodb://toml:toml12@ds129914.mlab.com:29914/im-on-a-ride'
mongoose.connect(mongoUrl)
const ObjectId = mongoose.Schema.Types.ObjectId

const AttractionSchema = new mongoose.Schema({
  _id: ObjectId,
  park: String,
  name: String,
  thrill: Number,
  video: String,
  ridetime: String,
  category: String,
  minheight: String
})
const FacilitySchema = new mongoose.Schema({
  _id: ObjectId,
  park: String,
  type: String
})

const Attraction = mongoose.model('Attractions', AttractionSchema, 'Attractions')
const Facility = mongoose.model('Facilities', FacilitySchema, 'Facilities')

module.exports = {
  getAttractions: () => Attraction.find(),
  findAttraction: attraction => Attraction.findById(attraction),
  getFacilities: () => Facility.find()
}
