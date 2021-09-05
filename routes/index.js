const express = require('express');
const router = express.Router();

/* GET home page. */
router.get('/', function (req, res, next) {
	res.render('../views/pages/dashboard/homepage.ejs', { title: 'Express Home' });
});
router.get('/dashboard', function (req, res, next) {
	res.render('../views/pages/dashboard/dashboard.ejs', { title: 'Dashboard Page' });
});

module.exports = router;
