var express = require('express');
var wordpress = require('wordpress');
var router = express.Router();

var client = wordpress.createClient({
	url: "https://sdfblog.wordpress.com/",
	username: "2016kobe",
	password: "P@ssw0rd"
});

/* GET home page. */
router.get('/wp', function(req, res, next) {
	var posts = client.getPosts(function( error, data ) {
		console.log(">>>>>");
		console.log(data);
		return data;
	});

  res.render('wp', { title: 'Wordpress' });
});

module.exports = router;