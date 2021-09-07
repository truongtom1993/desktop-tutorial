const express = require('express');
const router = express.Router();

router.use('/', require('./home'));
router.use('/dashboard', require('./dashboard'));
router.use('/items', require('./items'));
router.use('/videos', require('./videos'));

module.exports = router;
