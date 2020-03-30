const MongoClient = require('mongodb').MongoClient;

const url = "mongodb://localhost:27017/mydb";

MongoClient.connect(url, { useUnifiedTopology: true }, function (err, db) {

  if (err) throw err;

  const username = "Osinachi"

  console.log(`Database created by ${username}`);

  db.close();

});