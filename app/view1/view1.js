'use strict';

angular.module('myApp.view1', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/view1', {
    templateUrl: 'view1/view1.html',
    controller: 'View1Ctrl'
  });
}])

.controller('View1Ctrl', function() {
 this.age = 29;
 this.comics = [{
				id:'1',
				url:'/comics/page1.jpg',
				title:'Page 1',
				date:'01/04/2016',
				tags:'first,dumb,test',
				post:'This is a great day, the first post. Can you believe it?'
			},
			{
				id:'2',
				title:'Page 2',
				url:'/comics/page2.jpg',
				date:'01/05/2016',
				tags:'second,dumb,test',
				post:'A second post already, how are we updating this quickly??'
			}
		];
});


