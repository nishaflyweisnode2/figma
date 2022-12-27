
const express = require('express'); 
const privacy = require('../controller/privacy_controllers');


const router = express();


router.post('/policy',[  privacy.addPrivacy]);
router.get('/policy',[  privacy.getPrivacy]);
router.put('/policy/:id',[ privacy.updatePolicy]);
router.delete('/policy/:id',[ privacy.DeletePolicy])



module.exports = router;