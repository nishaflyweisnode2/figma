const mongoose = require('mongoose');

const paymentSchema = mongoose.Schema({
    userId: {
        type: mongoose.Schema.Types.ObjectId, 
        ref  : "Customer"
    },
    payment_Id :{
        type: String, 
    }, 
    amount: {
        type: Number, 
        required: true
    }, 
    invoice: {
        type: String
    },
    status: {
        type: Boolean, 
        default : false
    }, 
    receipt: {
        type: String, 
        required: true
    }, 
    amount_paid: {
        type: Number,
        default: 0
    },
    name: {
        type: String, 
        required: true
    }, 
    type: {
        type: String, 
        enum : ["given", "Given", "taken", "Taken", "GIVEN", "TAKEN"]
    }, 
    date: {
        type: Date
    }, 
    paymentMethod : {
        type: String, 
        enum: ["upi", "DebitCard", "Debitcard", "debitcard", "creditcard", "CreditCard"]
    }, 
    product: {
        type: String
    }, 
    orderStatus : {
        type: String, 
        default: "Cancelled",
        enum: ["Cancelled", "Invoiced", "Ordered"]
    },
    createdAt: {
        type: Date,
        default: Date.now
      }
}, )



const payment = mongoose.model('payment', paymentSchema);

module.exports = payment;