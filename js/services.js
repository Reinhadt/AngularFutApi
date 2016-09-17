angular.module("FinalApp")
.factory("FutResource", function($resource){

	 return  $resource('http://api.football-data.org/v1/soccerseasons', {});
	//return  $resource('http://jsonplaceholder.typicode.com/posts');

})

.factory("LigaResource", function($resource){

	 return  $resource('http://api.football-data.org/v1/soccerseasons/:id/leagueTable', {id: "@id"}, {
      query: {method:'GET', isArray:false}});
	//return  $resource('http://jsonplaceholder.typicode.com/posts');

})

.factory("SingleEquipoResource", function($resource){

	 return  $resource('http://api.football-data.org/v1/teams/:id', {id: "@id"}, {
      query: {method:'GET', isArray:false}});
	//return  $resource('http://jsonplaceholder.typicode.com/posts');

})

.factory("EquipoFixtures", function($resource){

	 return  $resource('http://api.football-data.org/v1/teams/:id/fixtures', {id: "@id"}, {
      query: {method:'GET', isArray:false}});
	//return  $resource('http://jsonplaceholder.typicode.com/posts');

})