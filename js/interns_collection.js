const mongo_client = require('mongodb').MongoClient;

const url = "mongodb://localhost:27017/mydb";

const mongo = mongo_client.connect(url, { useNewUrlParser: true, useUnifiedTopology: true }, (err, client) => {
  if (err) throw err;

  const db = client.db('osinachi');

  const collection = db.collection('interns');

  console.log("Inters collection created")

  collection.insertOne({ name: "Osinachi" }, (err, result) => {
    if (err) throw err;
  })
})
