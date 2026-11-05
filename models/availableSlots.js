const mongoose = require('mongoose')


const availableSlotsSchema = new mongoose.Schema({
    time: {
    type:String,
    enum:[   '9:00 AM',
            '10:00 AM',
            '11:00 AM',
            '12:00 PM'
        ]},
    doctor:{
        type: mongoose.Schema.Types.ObjectId,
        ref:'Doctor'
    },
    available:{
        type: Boolean
    }
})

const AvaibleSchedule = mongoose.model('AvaibleSchedule', availableSlotsSchema)

module.exports = AvaibleSchedule