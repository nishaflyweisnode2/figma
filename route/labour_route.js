const express = require("express");
const {updatelabourdetails,laboursignup,laboursignin,labourlogout,getlabourprofilebyid,labourgetallwork,labourgetworkbyworkid,
    acceptworkbylabour,rejectworkbylabour,labourgetextendwork,labourgetallextendedwork,labourrejectextendedwork,
    labouracceptextendedwork,createearnings,getlastsevendaysearnings,gettodaysearnings}= require('../controller/labour_controller');
const router = express.Router();


router.post("/updatelabourdetails/:_id",updatelabourdetails);
router.post("/laboursignup",laboursignup);
router.post("/laboursignin",laboursignin);
router.get("/labourlogout",labourlogout);
router.get("/getlabourprofilebyid/:_id",getlabourprofilebyid);
router.get("/labourgetallwork",labourgetallwork);
router.get("/labourgetworkbyworkid/:_id",labourgetworkbyworkid);
router.post("/acceptworkbylabour/:_id",acceptworkbylabour);
router.post("/rejectworkbylabour/:_id",rejectworkbylabour);
router.get("/labourgetextendwork/:_id",labourgetextendwork);
router.get("/labourgetallextendedwork",labourgetallextendedwork);
router.post("/labouracceptextendedwork/:_id",labouracceptextendedwork);
router.post("/labourrejectextendedwork/:_id",labourrejectextendedwork);
router.post("/createearnings/:_id",createearnings);
router.get("/getlastsevendaysearnings/:_id",getlastsevendaysearnings);
router.get("/gettodaysearnings/:_id",gettodaysearnings);






module.exports = router; 
