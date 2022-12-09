const { string } = require("is");
const mongoose = require("mongoose");


const customeworkrschema = new mongoose.Schema({

    customerid: {
        type: String,
        required: true
    },
    shopname: {
        type: String,
        required: true
    },
    address: {
        type: String,

        required: true
    },
    noofhours: {
        type: Number,
        required: false
    },
    noofworkers: {
        type: Number,
        require: false,

    },
    sheduletime: {
        type: String,
        require: true,

    },
    workdescription: {
        type: String,
        required: false
    },
    paymentstatus:{
        type: String,
        required: false
    },
   amount: {
        type: Number,
        required: false
    },
    extendworkinminuite: {
        type: Number,
        required: false
    },
   
    workstatus: {
        type: String,
        required: false,
        default: 'pending'
    },
    extendworkamount: {
        type: Number,
        required: false
    },
    extendworkstatus: {
        type: String,
        required: false,
       
    },
    extendworkpaymentstatus:{
        type: String,
        required: false
    },
    
    status: [],

    extendedworkstatus: [],



    createdateandtime: {
        type: String,
        required: false
    },
    isextended: {
        type: Boolean,
        required: true,
        default: false
    },
    extentdworkmessage:{ 
        type: String,
        required: false
    },
    isdeleted: {
        type: Boolean,
        required: true,
        default: false
    },
    labourid: {
        type: String,
        required: false
    },
   message: {
        type:String,
        type: String,
        required: false,
        default: 'Start Work'
    }
    
})


const customerworkmodel = new mongoose.model("Customerwork", customeworkrschema);

module.exports = customerworkmodel;