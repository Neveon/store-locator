const express = require('express');
const { getStores } = require('../controllers/stores');

const router = express.Router();

// When GET request sent to /api/v1/stores, getStores is used
router.route('/').get(getStores);

module.exports = router;