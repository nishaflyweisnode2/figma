const express = require("express");
const { adminsignup,adminsignin,admingetallcustomer,admingetalllabour,admingetcustomerbyid,admingetlabourbyid,admingetallwork,admingetworkbyworkid}= require('../controller/admin_controller');
const router = express.Router();



router.get("/admingetallcustomer",admingetallcustomer);
router.get("/admingetalllabour",admingetalllabour);
router.get("/admingetcustomerbyid/:_id",admingetcustomerbyid);
router.get("/admingetlabourbyid/:_id",admingetlabourbyid);
router.get("/admingetallwork",admingetallwork);
router.get("/admingetworkbyworkid/:_id",admingetworkbyworkid);
router.post("/adminsignup",adminsignup);
router.post("/adminsignin",adminsignin);







module.exports = router; 