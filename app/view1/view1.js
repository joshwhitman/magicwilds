'use strict';

angular.module('myApp.view1', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/view1', {
    templateUrl: 'view1/view1.html',
    controller: 'View1Ctrl'
  });
}])

.controller('View1Ctrl', function() {
	
});

angular.module('myApp.library',[])

.controller('Library', function(){
	this.library = comics;
})

var comics = [{
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
			},
			{
				id:'3',
				title:'Page 3',
				url:'/comics/page3.jpg',
				date:'01/06/2016',
				tags:'third,action,test',
				post:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus vitae augue iaculis, aliquet ipsum eget, blandit magna. Morbi blandit massa sit amet ligula facilisis, at lobortis felis laoreet. Pellentesque feugiat sollicitudin purus, vitae luctus enim rhoncus id. Pellentesque posuere placerat pellentesque. Morbi et pharetra justo. Donec vestibulum consequat nisl, eget suscipit lacus sodales ac. Suspendisse potenti. Phasellus vitae aliquam augue, id tempor nulla. Nullam hendrerit elit a mi placerat, ut commodo enim vehicula. Vivamus ut lorem non ex gravida rhoncus. Ut in tincidunt lorem. Sed eu ultricies purus. Nam lacus erat, euismod sed ante quis, maximus aliquam turpis.'
			},
			{
				id:'4',
				title:'Page 4',
				url:'/comics/page4.jpg',
				date:'01/07/2016',
				tags:'fourth,action,test',
				post:'Fusce facilisis est eu hendrerit tincidunt. Nullam sem purus, fringilla vel vehicula eu, varius sed dolor. In tincidunt elementum mi, non rutrum leo tempor sed. Nunc porttitor mauris ligula, id luctus purus accumsan sed. Suspendisse potenti. Phasellus non erat vitae velit dapibus tincidunt gravida vel sem. Duis pretium leo nibh, a suscipit sapien gravida sed. Nunc orci justo, ornare quis lorem nec, rhoncus suscipit magna. Pellentesque sed placerat mi, a venenatis diam. Ut molestie nisi mauris, vel mollis risus luctus ut. Sed ut nibh eu leo molestie consectetur.\nCurabitur diam ligula, iaculis et vestibulum eget, sollicitudin vitae metus. Quisque scelerisque nisi quis quam efficitur, et dapibus lorem elementum. Phasellus condimentum, lorem ac finibus lobortis, metus lorem scelerisque lorem, sit amet sodales orci lectus nec lorem. Aenean vel dignissim turpis. Etiam nec tempus nulla. Maecenas varius efficitur maximus. Nulla vel rhoncus nibh. Fusce quis viverra mauris, sed maximus diam. Nulla malesuada vestibulum nibh, sed convallis mi venenatis sit amet. Nunc interdum nisi id orci dictum, ac rutrum nulla dignissim. Aliquam quis orci turpis. Aenean faucibus dui a ligula tempus euismod. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin dignissim libero bibendum enim mollis suscipit.'
			},
			{
				id:'5',
				title:'Page 5',
				url:'/comics/page5.jpg',
				date:'01/08/2016',
				tags:'fifth,action,test',
				post:'Quisque vehicula, erat et vehicula cursus, magna enim tincidunt massa, in tristique est augue ut nulla. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Quisque nisi enim, tincidunt vitae lacinia nec, congue eget tortor. Nunc quis tristique sapien, vel ultrices felis. Pellentesque laoreet nisl at tempus bibendum. Fusce id neque ligula. Praesent faucibus lectus a velit laoreet tempus. Praesent auctor pretium consectetur. Maecenas porttitor massa eu justo tincidunt maximus nec et diam. Maecenas mattis mi mauris, et scelerisque justo egestas non. Aliquam erat volutpat. Aenean convallis ultricies elit, ac iaculis erat ultrices et. Vivamus molestie ornare imperdiet.'
			}
		];
