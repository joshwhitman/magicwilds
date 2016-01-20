'use strict';

angular.module('myApp.blogModule', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/blog', {
    templateUrl: 'blog/blog.html',
    controller: 'BlogCtrl'
  });
}])

.controller('BlogCtrl', ['tumblrService', function(tumblrService) {
this.posts = tumblrService.getBlogPosts();
console.log(this.posts);
this.content = 55;
}])

.factory('tumblrService', ['$http', function($http) {
	return{
		getBlogPosts: function(){ //get latest posts from blog
			$http.jsonp('http://api.tumblr.com/v2/blog/magicwildsblog.tumblr.com/posts/text?api_key=ZiTmMsK0ZqVJXhSyCCrjc12oe0dI2ZZXngiSeJ5hQSn3ZQ96Pa&callback=JSON_CALLBACK').then(
				function(response){
					console.log(response.data.response.posts);
					return response.data.response.posts;
				}, function(response){
					return response.data.response.posts || "Request Failed";
			});
		}
		};
	}]);
