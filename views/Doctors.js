const mongoose = require('mongoose');
require('dotenv').config();
const Doctor = require('./models/Doctor.js');

const doctors = [
  { name: 'Dr. Layla Haddad',  specialty: 'Cardiology' },
  { name: 'Dr. Omar Khalil',   specialty: 'Dermatology' },
  { name: 'Dr. Noor Saleh',    specialty: 'Pediatrics' },
  { name: 'Dr. Yusuf Mansour', specialty: 'General Practice' },
];