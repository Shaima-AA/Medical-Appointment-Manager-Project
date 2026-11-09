const mongoose = require('mongoose')


//schema
const doctorSchema = new mongoose.Schema({
   Name:{
    type: String,
    required: true
   },
   Specialty:{
    type: String,
    required: true
   },
   doctorImage:{
    type: String
   }
}, { timestamps: true })

//model
const Doctor = mongoose.model("Doctor", doctorSchema)

//export model
module.exports = Doctor