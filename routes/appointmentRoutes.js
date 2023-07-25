const express= require('express');
const { morningAppointmentDetails, eveningAppointmentDetails, getMorningAppointmentDetail, getEveningAppointmentDetail } = require('../controllers/appointmentController');



const router= express.Router();

router.route("/morningappointment").post(morningAppointmentDetails);
router.route("/eveningappointment").post(eveningAppointmentDetails);
router.route("/getmorningappointment").get(getMorningAppointmentDetail);
router.route("/geteveningappointment").get(getEveningAppointmentDetail);

module.exports= router;