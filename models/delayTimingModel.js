const mongoose= require('mongoose');

const delayTimingSchema= new mongoose.Schema({
    id:{type: Number},
    showStartDate:{type: String},
    showEndDate:{type: String},
    showTime:{type: String},
    sliderValue:{type: String}
});

module.exports = mongoose.model("Time",delayTimingSchema);
