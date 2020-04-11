const mongo_client = require('mongodb').MongoClient;

const url = "mongodb://localhost:27017/mydb";

const mongo = mongo_client.connect(url, { useNewUrlParser: true, useUnifiedTopology: true }, (err, client) => {
  if (err) throw err;
  /* This is old code from the previous task*/
  const db = client.db('osinachi');

  const collection = db.collection('interns');

  console.log("Inters collection created\n")

  collection.insertOne({ name: "Osinachi" }, (err, result) => {
    if (err) throw err;
  })

  /* This is the code for task 3 */
  const myMovies = db.collection('myMovies');
  console.log("Task 3 results start here\n\nmyMovies collection created");
  myMovies.insertMany([
    { movie: "The Banker", year: "2020", rating: 8 },
    { movie: "Bad Boys", year: "2020", rating: 7 },
    { movie: "The Hunt", year: "2020", rating: 7 },
    { movie: "Bloodshot", year: "2020", rating: 7.5 },
    { movie: "First Cow", year: "2020", rating: 6.5 }
  ], (err, result) => {
    if (err) throw err;
    console.log(result);
  });


})
