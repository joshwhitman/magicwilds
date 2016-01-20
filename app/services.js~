'use strict';

myApp.factory('tumblrService', function() {
	return{
		getBlogPosts: function(offset){ //get latest posts from blog
			$http.jsonp 'http://api.tumblr.com/v2/blog/magicwildsblog.tumblr.com?api_key=ZiTmMsK0ZqVJXhSyCCrjc12oe0dI2ZZXngiSeJ5hQSn3ZQ96Pa&callback=JSON_CALLBACK'
			.success (data) -> this.blogs = data.response.posts;
			.error (data) -> console.log('ERROR retrieving tumblr posts');
}
};
)};

