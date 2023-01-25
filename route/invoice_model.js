const mongoose = require('mongoose');


const InvoiceSchema = mongoose.Schema({
    customerName: {
        type: String
    }, 
    invoiceNumber: {
        type: String
    }, 
    desc: {
        type: String
    },
    date: {
        type: String
    }, 
    address: {
        type: String
    }, 
    send: {
        type: String
    }
})

const invoice = mongoose.model('invoice', InvoiceSchema);
module.exports = invoice