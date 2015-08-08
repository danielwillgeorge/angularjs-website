(function(){
	var app = angular.module('myData', [ ]);
	
	app.controller('myDataController', function(){
		this.data = profile;
		
		this.links = urls;
	});
	
	var profile = {
		
		name: 'Daniel Will George',
		experience: 'Software Developer + Analyst'
		
	}
	
	var urls = [
	
		{website : 'Stackoverflow', url : 'http://stackoverflow.com/users/3195451/daniel'},
		{website : 'Github', url : 'https://github.com/danielwillgeorge'}
		
	]

})();