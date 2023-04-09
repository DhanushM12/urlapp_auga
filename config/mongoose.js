const mongoose = require('mongoose')

mongoose.set('strictQuery', false)

mongoose.connect("mongodb://0.0.0.0:27017/url_auga")

const db = mongoose.connection;

db.on("error", console.error.bind(console, "Connection Problem"));

db.on("open", function(){
    console.log("Connected successfully to MongoDB")
})

module.exports = db;