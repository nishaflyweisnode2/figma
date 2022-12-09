const mongoose = require("mongoose");


const labourschema = new mongoose.Schema({
    fullname:{
        type:String,
        required:true
    }, 
    mobilenumber:{
        type:String,
       unique:true,
        required:true
    },
   
    addresstype:{
        type:String,
       require:true,
       
    },
    typesofwork:{
        type:String,
       require:true,
       
    },
    password:{
        type:String,
       require:false,
       
    },
    usertype:{
        type:String,
       require:true,
       
    },
    earnings:[],
    earningammount:{
        type:Number,
       require:false,
       
    },
       
    isdeleted:{
          type:Boolean, 
          required:true,
          default:false
    }  
})


const labourmodel = new mongoose.model("labour",labourschema);

module.exports = labourmodel;