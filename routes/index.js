var express = require('express');
var router = express.Router();

const docController = require('../controllers/docController');

/* GET home page. */
// router.get('/', function(req, res, next) {
//   res.render('index', { title: 'Express' });
// });

router.get('/', docController.homepage)

router.get('/add', docController.add)
router.post('/add' , docController.addpost)


module.exports = router;
