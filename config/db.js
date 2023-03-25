
const mongoose = require('mongoose');
require('dotenv').config();
const env = process.env;



module.exports = () => {
  function connect() {
    const url = `mongodb+srv://${env.MONGO_USERNAME}:${env.MONGO_PASSWORD}@kusitums-haker.qwfha8x.mongodb.net/?retryWrites=true&w=majority`;
    mongoose
        .connect(url)
        .then(() => console.log("MongoDB connection is made."))
        .catch((err) => console.log(err));
        
  }
  connect();
};

