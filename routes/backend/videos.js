var express = require('express');
var router = express.Router();

router.get('/list', function (req, res, next) {
	res.render('pages/videos/videos.ejs', { title: 'Express' });
});
router.get('/add', function (req, res, next) {
	res.render('pages/videos/add.ejs', { title: 'Express' });
});
router.get('/edit', function (req, res, next) {
	res.render('pages/videos/edit.ejs', { title: 'Express' });
});

module.exports = router;
