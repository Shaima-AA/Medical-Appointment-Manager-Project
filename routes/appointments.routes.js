const express = require("express");
const router = express.Router();
const Appointment = require("../models/Appointment.js");
const isSignedIn = require("../../../../lectures/unit2/Open House Code Along/middleware/is-signed-in.js");

//CRUD
//1. CREATE new appointment
  router.get('/new', isSignedIn, (req,res)=>{
    res.render('Appointments/create-appointment.ejs')
})

router.post('/',isSignedIn, async (req,res)=>{
     const createdAppointment = await Appointment.create({

     })
})


//2.to get all appointments
router.get('/', async (req,res)=>{
    const allAppointments = await Appointment.find()
    res.render('Appointments/all-appointments.ejs', {appointments: allAppointments})
})





















module.exports = router;