const dotenv = require("dotenv").config() //this allows me to use my .env values in this file
const connectToDB = require('./db.js')
const mongoose = require('mongoose')
const Doctor = require('./models/Doctor.js')
const AvailableSlots = require('./models/availableSlots.js')


async function seedDb(){
    await connectToDB()
    try{
        const createdDoctor = await Doctor.create({
            Name: 'Fatimah',
            Specialty: 'Family Medicine',
            doctorImage: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQd9afKI7eY8ZNdYFnUBauPiti8sU56IpUgV8CMGrV5m4A3wKNv5fqeQ8s&s=10'
        }
    
    )

        const availableSlots= await AvailableSlots.insertMany([
            {
                time:'9:00 AM',
                doctor: createdDoctor._id,
                available: true
            },
            {
                time:'10:00 AM',
                doctor: createdDoctor._id,
                available: true
            },
            {
                time:'11:00 AM',
                doctor: createdDoctor._id,
                available: true
            },
            {
                time:'12:00 PM',
                doctor: createdDoctor._id,
                available: true
            }
        ])
        console.log('Data Seeded Successfully')
    }catch(err){
    }
    mongoose.disconnect()

}


seedDb()