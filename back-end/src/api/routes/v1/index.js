const express = require('express');
const eventRoutes = require('./event.route');

const router = express.Router();

router.get('/status', (req, res) => res.send('OK'));
router.use('/events', eventRoutes);

module.exports = router;
