const express = require('express');
const { getStores, addStore } = require('../controllers/stores');

const router = express.Router();

// When GET request sent to /api/v1/stores, getStores is used
// addStore used when POST request sent
router.route('/').get(getStores).post(addStore);

module.exports = router;