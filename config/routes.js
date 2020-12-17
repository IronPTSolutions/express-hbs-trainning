const express = require('express');
const commonController = require('../controllers/common.controller');

const router = express.Router();

router.get('/', commonController.episodes);

module.exports = router;
