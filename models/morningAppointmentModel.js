const mongoose= require('mongoose');

const morningAppointmentSchema= new mongoose.Schema({
    showEndDate: {type: String},
    isMorning:{type:String},
    isMorningTimeShow:{type:String},
    status:{type:Boolean}
});

module.exports = mongoose.model("MorningAppointment",morningAppointmentSchema);