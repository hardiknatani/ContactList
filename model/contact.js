const mongoose = require('mongoose');


//Creating Schema
const contactSchema =  new mongoose.Schema({
    name:{
        type:String,
        required:true}
   ,
    phone:{
        type:String,
        required:true} 
    }
);


//Creating Model, Always Written in PascalCase
const Contact = new mongoose.model('Contact',contactSchema)


//Exporting Model
module.exports = Contact;