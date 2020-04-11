const mongo_client = require('mongodb').MongoClient;

const url = "mongodb://localhost:27017/mydb";

const mongo = mongo_client.connect(url, { useNewUrlParser: true, useUnifiedTopology: true }, (err, client) => {
  if (err) throw err;
  const db = client.db('osinachi');

  const myMovies = db.collection('myMovies');

  myMovies.findOneAndUpdate(
    { movie: 'The Banker' },
    {
      $set: {
        movie: "Lucy",
        rating: 9,
        year: 2014,
      },
    },
    (err, result) => {
      if (err) throw err;
      console.log(result);
    }
  );
})


