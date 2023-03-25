const mongodb = require('mongodb');
const MongoClient = mongodb.MongoClient;
const url = `mongodb+srv://opop0421:0tkW46nJP4S2HiPv@kusitums-haker.qwfha8x.mongodb.net/?retryWrites=true&w=majority`

MongoClient.connect(url)
  .then(client => {
    console.log('mongo connected');
    console.log(client);
  })
  .catch(err => console.log(err));
