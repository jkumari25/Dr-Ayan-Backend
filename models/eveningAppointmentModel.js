const mongoose= require('mongoose');

const eveningAppointmentSchema= new mongoose.Schema({
    showEndDate: {type: String},
    isEvening:{type:String},
    isEveningTimeShow:{type:String},
    status:{type:Boolean}
})

module.exports = mongoose.model("EveningAppointment",eveningAppointmentSchema);