const express = require('express');
const router = express.Router();

/* GET home page. */
router.get('/', function (req, res, next) {
	res.render('./pages/home/homepage.ejs', { title: 'HomePage' });
});

module.exports = router;
