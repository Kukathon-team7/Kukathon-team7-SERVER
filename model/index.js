const mongoose = require('mongoose');
require('dotenv').config();
const env = process.env;



const connect = () => {
  function connect() {
    const url = `mongodb+srv://${env.MONGO_USERNAME}:${env.MONGO_PASSWORD}@kusitums-haker.qwfha8x.mongodb.net/?retryWrites=true&w=majority`;
    mongoose
        .connect(url,{
            dbName: 'FoodSchema',
            useNewUrlParser: true,
          },)
        .then(() => console.log("MongoDB connection is made."))
        .catch((err) => console.log(err));
        
  }
  connect();
};

module.exports = connect;