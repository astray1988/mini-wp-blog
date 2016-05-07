var express = require('express');
var router = express.Router();
var wordpress = require('wordpress');

var client = wordpress.createClient({
	url: "https://sdfblog.wordpress.com/",
	username: "2016kobe",
	password: "P@ssw0rd"
});

/* GET home page. */
router.get('/', function(req, res, next) {

	var posts = client.getPosts(function( error, data ) {
		console.log(">>>>>");
		
		for (var i=0; i < data.length; i++) {
			var title = data[i].title;
			console.log(title);
		}

		return data;
	});

    res.render('index', { title: 'damiao' });
});





function createPost(title, content) {

	client.newPost({
		title: title,
		content: content,
		status: "publish"
	}, function( error, data ) {
		console.log( arguments );
	});
}




module.exports = router;
