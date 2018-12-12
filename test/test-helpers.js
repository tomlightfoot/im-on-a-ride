const client = require('mongodb').MongoClient

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

function dropDb(url) {
  return client.connect(url)
    .then(db => db.collections())
    .then(collections => {
      const requests = collections.map(col => col.drop())
      return Promise.all(requests)
    })
}

module.exports = {
  initDb,
  dropDb
}
