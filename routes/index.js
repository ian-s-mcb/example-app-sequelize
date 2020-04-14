const express = require('express');
const router = express.Router();

const auth = require('../utils/auth')

// GET root
router.get('/', function(req, res, next) {
  res.json({ message: 'Public endpoint' })
});

// GET /private
router.get('/private', auth, function(req, res, next) {
  res.json({ message: 'Private endpoint' })
});

module.exports = router;
