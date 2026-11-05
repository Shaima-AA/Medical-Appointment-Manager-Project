const express = require("express");
const router = express.Router();
const Appointment = require("../models/Appointment.js");
const isSignedIn = require("../middleware/is-signed-in.js");
const Doctor = require("../models/Doctor.js")
const AvailableSlots = require("../models/availableSlots.js")


//CRUD
//1. CREATE new appointment
router.get('/new/:id', isSignedIn, async (req, res) => {
  const doctor = await Doctor.findById(req.params.id)
  const availableSlots = await AvailableSlots.find({available: true})
  res.render('Appointments/create-appointment.ejs', { doctor, availableSlots })
})

router.post('/new/:doctorId', isSignedIn, async (req, res) => {
  const doctor = await Doctor.findById(req.params.doctorId)
  const updatedSlot = await AvailableSlots.findByIdAndUpdate(req.body.time, {available:false})
  const createdAppointment = await Appointment.create({
    user: req.session.user._id,
    Patient: req.body.Patient,
    Doctor: doctor,
    Date: req.body.Date,
    time: req.body.time,
    Reason: req.body.Reason
  })
  res.redirect('/appointments')
})


//2.to get all appointments
router.get('/', async (req, res) => {
  const allAppointments = await Appointment.find().populate('Doctor').populate('Patient')
  res.render('Appointments/all-appointments.ejs', { appointments: allAppointments })
})



//3.edit
router.get('/:doctorId', isSignedIn, async (req,res)=>{
   const bookedAppointment = await Appointment.findById(req.params.doctorId).populate('Patient').populate('Doctor')
   res.render('Appointments/details.ejs', {appointments:bookedAppointment})
})


//update
// show edit form
router.get('/:id/edit', isSignedIn, async (req, res) => {
  const appointment = await Appointment.findById(req.params.id).populate('Doctor').populate('Patient')
  res.render('Appointments/edit-appointment.ejs', { appointment:appointment })
})
// save changes
router.put('/:id', isSignedIn, async (req, res) => {
  const updatedAppointment = await Appointment.findByIdAndUpdate(req.params.id, {
    Patient: req.body.Patient,
    Date: req.body.Date,
    Time: req.body.Time,
    Reason: req.body.Reason
  })
  res.redirect('/appointments')
})



//Delete
router.delete('/:id',isSignedIn, async (req,res)=>{
     const deletedAppointment = await Appointment.findByIdAndDelete(req.params.id)
     res.redirect('/appointments')
})
















module.exports = router;