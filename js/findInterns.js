const mongo_client = require('mongodb').MongoClient;

const url = "mongodb://localhost:27017/mydb";

const mongo = mongo_client.connect(url, { useNewUrlParser: true, useUnifiedTopology: true }, (err, client) => {
  if (err) throw err;
  const db = client.db('osinachi');

  const myMovies = db.collection('myMovies');

  myMovies.find().toArray((err, items) => {
    console.log("\nFirst document in collection")
    if (err) throw err;
    console.log(items[0])
  })

  myMovies.find({ rating: 7 }).toArray((err, items) => {
    console.log("\n\nAll movies with rating 7")
    if (err) throw err;
    console.log(items)
  });

  myMovies.find({}, { 'movie': 1, 'year': 0, 'rating': 0, '_id': 0 }).toArray((err, items) => {
    console.log("\n\nMovie titles only")
    if (err) throw err;
    console.log(items)
  });
})


