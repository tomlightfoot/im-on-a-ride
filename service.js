const mongoose = require('mongoose')
const mongoUrl = process.env.MONGO_URL || 'mongodb://toml:toml12@ds129914.mlab.com:29914/im-on-a-ride'
mongoose.connect(mongoUrl)

const AttractionSchema = new mongoose.Schema({
  name: String,
  minAge: Number,
  minHeight: Number,
  rideTime: String,
  thrillRating: Number,
  video: String,
})
const Attraction = mongoose.model('Attractions', AttractionSchema, 'Attractions')

module.exports = {
  getAttractions: () => Attraction.find()
}
