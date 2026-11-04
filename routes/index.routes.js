const router = require("express").Router()
const Doctors = require('../models/Doctor')


router.get('/', async (req,res)=>{
    const doctors = await Doctors.find()
    res.render('homepage.ejs',{doctors:doctors})
})
module.exports = router;
