const mongoose = require('mongoose');



const labourSchema = mongoose.Schema({
    name: {
        type:String
    }, 
    desc: {
        type: String
    }, 
    location: {
        type: String
    }

})


const labourWork = mongoose.model('labourwork', labourSchema)

module.exports = labourWork