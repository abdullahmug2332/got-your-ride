const express = require('express');
const router = express.Router();
const { getAboutInfo,updateAboutData  } = require('../controllers/aboutController');

router.get('/', getAboutInfo);
router.put('/editabout', updateAboutData );

module.exports = router;
