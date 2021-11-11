const mongoose = require("mongoose");

var mongoURL = 'mongodb+srv://amogh05:Amogh%402001@cluster0.00uhy.mongodb.net/mern-hotelrooms'

mongoose.connect(mongoURL , {useUnifiedTopology : true , useNewUrlParser:true})

var connection = mongoose.connection

connection.on('error' , ()=>{
    console.log('Mongo DB Connection failed')
})

connection.on('connected', ()=>{
    console.log('Mongo DB Connection Successful')
})

module.exports = mongoose