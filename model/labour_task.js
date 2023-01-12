const mongoose = require('mongoose');



const labourSchema = mongoose.Schema({
    labourId: {
     type: mongoose.Schema.Types.ObjectId, 
     ref: "labour",
     require: true
    },
    name: {
        type:String
    }, 
    desc: {
        type: String
    }, 
    location: {
        type: String
    }

}, { timestamps: true})


const labourWork = mongoose.model('labourwork', labourSchema)

module.exports = labourWork