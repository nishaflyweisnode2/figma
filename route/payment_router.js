
const express = require('express');
const  payment = require('../controller/paymentControllers')


const router = express();


router.post('/payment', payment.CreatePaymentOrder);
router.get('/payment',payment.getAllPayments );
router.get('/payment/:id', payment.GetPaymentsById)


module.exports = router;