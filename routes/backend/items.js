const express = require('express');
const router = express.Router();

/* GET home page. */
router.get('/', function (req, res, next) {
	res.render('../views/pages/items/list.ejs', { title: 'Item list page' });
});
router.get('/add', function (req, res, next) {
	res.render('../views/pages/items/add.ejs', { title: 'Item add Page' });
});

module.exports = router;
