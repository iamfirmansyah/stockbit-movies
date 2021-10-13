var express = require('express');
var router = express.Router();
const {searchMovies, detailMovies} = require('../controllers/movies')

router.get('/', function(req, res) {
  res.json("Hello Stockbit");
});

router.get('/search', searchMovies)
router.get('/detail', detailMovies)

module.exports = router;
