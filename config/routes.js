const express = require('express');
const commonController = require('../controllers/common.controller');

const router = express.Router();

// router.get('/about', aboutController.about);
router.get('/', commonController.episodes)
// router.get('/episodes', commonController.episodes)

module.exports = router;
