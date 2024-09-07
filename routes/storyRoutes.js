const express = require('express');
const router = express.Router();

router.post('/create', (req, res) => {
  res.send('Create story route');
});

router.get('/get', (req, res) => {
  res.send('Get stories route');
});

module.exports = router;
