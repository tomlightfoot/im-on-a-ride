const express = require('express')
const service = require('./service')
const bodyParser = require('body-parser')
const client = require('mongodb').MongoClient
const app = express()
app.use(bodyParser.json())
app.use(express.static(`${__dirname}/static`))

app.get('/attractions', (req, res) => {
  console.log(service)
  service.getAttractions().then(attractions => res.json(attractions))
})

// Serve static assests if in production
if(process.env.NODE_ENV === 'production'){
  // Set static folder
  app.use(express.static('client/build'));
  
  app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
  });
}

function initDb(url, data) {
  return client.connect(url)
    .then(db => {
      const requests = Object.keys(data).map(col => {
        const collection = db.collection(col)
        return collection.insert(data[col])
      })
      return Promise.all(requests)
    })
}

module.exports = {
  initDb
}

const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Server started on port ${port}`));
