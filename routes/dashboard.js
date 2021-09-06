const express = require('express');
const router = express.Router();

router.get('/', function (req, res, next) {
	res.render('../views/pages/dashboard/dashboard.ejs', { title: 'Dashboard Page' });
});

module.exports = router;
