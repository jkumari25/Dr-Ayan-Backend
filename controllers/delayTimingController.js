const catchAsyncErrors= require("../middleware/catchAsyncError");
const Timing= require("../models/delayTimingModel");

// Post Delay Timing Details:-
exports.delayTimingForm= catchAsyncErrors(async(req,res,next) => {

    const {showStartDate,showEndDate,showTime,sliderValue}= req.body;

    const time= new Timing({
        showStartDate,showEndDate,showTime,sliderValue
    });

    await time.save();

    res.status(201).json({
        success: true,
        time
    })

});

// GET delay timing Data :-
exports.getDetailTimingForm= catchAsyncErrors(async(req,res,next) => {
    const time= await Timing.find();
  
    res.status(200).json({
       success:true,
       time,
    })
  })