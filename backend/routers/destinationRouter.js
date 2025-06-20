const express = require('express');
const router = express.Router();
const {destination,updateDestinations} = require('../controllers/destinationController');

router.post('/', destination); // ✅
router.put('/updateDestinations', updateDestinations); // ✅


module.exports = router;
