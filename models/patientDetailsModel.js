const mongoose= require('mongoose');


const patientDetailSchema= new mongoose.Schema({
    id:{type: Number},
        date:{type:String},
        slot:{type:String},
        name:{type:String},
        phone:{type:String},
        problem:{type:String},
        address:{type:String},
        category:{type: String},
   
});

module.exports = mongoose.model("Patient",patientDetailSchema);