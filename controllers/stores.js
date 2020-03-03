const Store = require('../models/store');

// @desc  Get all stores
// @route GET /api/v1/stores
// @access Public
exports.getStores = async (req, res, next) => {
  try {
    const stores = await Store.find(); // fetch all stores

    return res.status(200).json({
      success: true,
      count: stores.length,
      data: stores
    });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Server error' });
  }
}

// @desc  Create a store
// @route POST /api/v1/stores
// @access Public
exports.addStore = async (req, res, next) => {
  try {
    //console.log(req.body); data coming in

    // create in DB and return to variable, then send as a response
    const store = await Store.create(req.body);

    return res.status(200).json({
      success: true,
      data: store
    });
  } catch (err) {
    // error code: 11000 is a duplicate key error collection
    if(err.code === 11000) {
      // 400 status for user error, not server error
      return res.status(400).json({ error: 'This store already exists' });
    }

    console.error(err);
    res.status(500).json({ error: 'Server error' });
  }
}