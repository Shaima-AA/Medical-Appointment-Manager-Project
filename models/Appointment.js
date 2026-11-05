const mongoose = require('mongoose');

//schema
const appointmentSchema = new mongoose.Schema({
   user:{
      type: mongoose.Schema.Types.ObjectId,
        ref: "User",  
   },
    Patient:{
        // type: mongoose.Schema.Types.ObjectId,
        // ref: "User", 
        type: String,
        required: true
    },
    Doctor:{
        type: mongoose.Schema.Types.ObjectId,
        ref: "Doctor",
    },
    Date: {
        type: String,
        required: true
    },
    Time: {
        type: String,
        required: true
    },
    Reason:{
        type: String,
        required: true
    }

},{timestamps:true});

//model
const Appointment = mongoose.model("Appointment", appointmentSchema);

//export model
module.exports = Appointment;