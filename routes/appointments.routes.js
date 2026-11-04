const express = require("express");
const router = express.Router();
const Appointment = require("../models/Appointment.js");
const isSignedIn = require("../middleware/is-signed-in.js");
const Doctor = require("../models/Doctor.js")


//CRUD
//1. CREATE new appointment
router.get('/new/:id', isSignedIn, async (req, res) => {
  const doctor = await Doctor.findById(req.params.id)
  // console.log(req.params.Doctors)
  // const appoint = await Appointment.find().populate('Doctor')
  // console.log(appoint)
  res.render('Appointments/create-appointment.ejs', { doctor })
})


router.post('/new/:doctorId', isSignedIn, async (req, res) => {
  const doctor = await Doctor.findById(req.params.doctorId)
  const createdAppointment = await Appointment.create({
    Patient: req.body.Patient,
    Doctor: doctor,
    Date: req.body.Date,
    Time: req.body.Time,
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


// show edit form
router.get('/:id/edit', isSignedIn, async (req, res) => {
  const appointment = await Appointment.findById(req.params.id).populate('Doctor').populate('Patient')
  res.render('Appointments/edit-appointment.ejs', { appointment })
})

// save changes
router.put('/:id', isSignedIn, async (req, res) => {
  await Appointment.findByIdAndUpdate(req.params.id, {
    Date: req.body.Date,
    Time: req.body.Time,
    Reason: req.body.Reason
  })
  res.redirect('/appointments/' + req.params.id)
})


















module.exports = router;