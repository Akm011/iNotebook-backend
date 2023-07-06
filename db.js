const mongoose = require('mongoose');
mongoose.set('strictQuery', false);

const mongoURI = ("mongodb://127.0.0.1:27017/?directConnection=true&serverSelectionTimeoutMS=2000&appName=mongosh+1.10.1");

const connectToMongo = () => {
    mongoose.connect(mongoURI, { useNewUrlParser: true, useUnifiedTopology: true })
    .then( ()=> console.log("Connected to MongoDB successfully!!"))
    .catch((err=> console.log("the error is  : "+err)));

}

module.exports = connectToMongo;