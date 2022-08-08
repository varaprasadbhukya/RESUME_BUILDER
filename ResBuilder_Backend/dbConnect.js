const mongoose = require('mongoose')

const URL = 'mongodb+srv://Chanukya:mongodb@cluster0.vmquwd8.mongodb.net/Resume'

mongoose.connect(URL, {useUnifiedTopology:true , useNewUrlParser:true})
 
const connection = mongoose.connection

connection.on('connected', ()=>{
    console.log('Mongo DB Connection Successful')
})

connection.on('error', (error)=>{
    console.log(error)
}) 