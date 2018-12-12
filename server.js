const express = require('express')
const service = require('./service')
const bodyParser = require('body-parser')
const app = express()
app.use(bodyParser.json())
app.use(express.static(`${__dirname}/static`))

app.get('/attractions', (req, res) => {
  console.log(service)
  service.getAttractions().then(attractions => res.json(attractions))
})
app.get('/facilities', (req, res) => {
  console.log(service)
  service.getFacilities().then(facilities => res.json(facilities))
})

// Serve static assests if in production
if(process.env.NODE_ENV === 'production'){
  // Set static folder
  app.use(express.static('client/build'));

  app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
  });
}

const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Server started on port ${port}`));
