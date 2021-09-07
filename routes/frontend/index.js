const express = require('express');
const router = express.Router();

router.get('/', function (req, res, next) {
	res.render('./pages/publish/homepage.ejs', { title: 'Homepage Pushlish' });
});

module.exports = router;
