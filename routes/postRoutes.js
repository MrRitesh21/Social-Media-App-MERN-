const express = require('express');
const router = express.Router();

router.post('/create', (req, res) => {
  res.send('Create post route');
});

router.get('/get', (req, res) => {
  res.send('Get posts route');
});

module.exports = router;