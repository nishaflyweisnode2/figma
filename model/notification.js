const mongoose = require('mongoose');

const notification = mongoose.Schema({
    userId: {
        type: mongoose.Schema.Types.ObjectId, 
        ref: "Customer", 
        require: true
    },
    Name: {
        type: String, 
        require: true
    }, 
    desc: {
        type: String, 
        require: true, 
    }, 
    NoLabour: {
        type: Number, 
        require: true
    }
});


const notify = mongoose.model('Notify', notification);

module.exports = notify