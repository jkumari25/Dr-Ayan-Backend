const catchAsyncErrors= require("../middleware/catchAsyncError");
const MorningAppointment= require("../models/morningAppointmentModel");
const EveningAppointment= require("../models/eveningAppointmentModel");

// Post Morning Appointment Details:-
exports.morningAppointmentDetails= catchAsyncErrors(async(req,res,next) => {

    const {showEndDate,isMorning,isMorningTimeShow,status}= req.body;

    const appoint= new MorningAppointment({
            showEndDate,isMorning,isMorningTimeShow,status
    });

    await appoint.save();

    res.status(201).json({
        success: true,
        appoint
    })

});

// Post Evening Appointment Details:-
exports.eveningAppointmentDetails= catchAsyncErrors(async(req,res,next) => {

    const {showEndDate,isEvening,isEveningTimeShow,status}= req.body;

    const appoint= new EveningAppointment({
            showEndDate,isEvening,isEveningTimeShow,status
    });

    await appoint.save();

    res.status(201).json({
        success: true,
        appoint
    })

});

// GET Evening Appointment Data :-
exports.getEveningAppointmentDetail= catchAsyncErrors(async(req,res,next) => {
    const appoint= await EveningAppointment.find();
  
    res.status(200).json({
       success:true,
       appoint,
    })
  })

// GET Morning Appointment Data :-
exports.getMorningAppointmentDetail= catchAsyncErrors(async(req,res,next) => {
    const appoint= await MorningAppointment.find();
  
    res.status(200).json({
       success:true,
       appoint,
    })
  })