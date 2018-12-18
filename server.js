const express = require('express')
const service = require('./service')
const bodyParser = require('body-parser')
const app = express()
app.use(bodyParser.json())
app.use(express.static(`${__dirname}/static`))

app.get('/attractions', (req, res) => {
  service.getAttractions().then(attractions => res.json(attractions))
})

app.get('/attractions/:id', (req, res) => {
  console.log(req.params.id);
  service.findAttraction(req.params.id).then(attractions => res.json(attractions))
})

app.put('/attractions/:divid/:thrill', (req, res) => {
 console.log(req.params.divid, req.params.thrill);
 service.updateAttractions(
   { divid: req.params.divid },
   { $push: { thrill: req.params.thrill }}
 )
 .then(attractions => res.json(attractions))
 .catch(err => res.status(404).json({ err }));
});

app.get('/facilities', (req, res) => {
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
