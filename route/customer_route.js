const express = require("express");
const {customersignin,customerprofilegetbyid,updatecustomerdetails,customerlogout
,customersigninupbymobilenumber}= require('../controller/customer_controller');
const router = express.Router();


// router.post("/customersignup",customersignup);
router.post("/customersignin",customersignin);
router.get("/customerprofilegetbyid/:_id",customerprofilegetbyid);
router.post("/updatecustomerdetails/:_id",updatecustomerdetails);
router.get("/customerlogout",customerlogout);
router.post("/customersigninupbymobilenumber",customersigninupbymobilenumber);




module.exports = router; 
