const mongoose = require('mongoose')

//schema
const appointmentSchema = new mongoose.Schema({
    Patient:{
        type: mongoose.Schema.Types.ObjectId,
        ref: "User", 
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

})