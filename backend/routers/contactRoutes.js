const express = require('express');
const router = express.Router();
const { getAllContactCards ,updateCard} = require('../controllers/contactController');

router.get('/', getAllContactCards);
router.put('/:id', updateCard);

module.exports = router;
