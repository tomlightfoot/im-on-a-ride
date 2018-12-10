const mongoose = require('mongoose')
const mongoUrl = process.env.MONGO_URL || 'mongodb://localhost:27017/example'
mongoose.connect(mongoUrl)
const TaskSchema = new mongoose.Schema({
  name: String,
  started: Date,
  completed: Boolean,
})
const Task = mongoose.model('tasks', TaskSchema)

module.exports = {
  getTasks: () => Task.find()
}
