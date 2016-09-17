angular.module("FinalApp")
.controller("MainController", function($scope, $http, FutResource){


	// Team = $resource('http://api.football-data.org//alpha/soccerseasons/1/teams', {}, {
	// 	get:{
	// 		method: 'GET',
	// 		headers: {'X-Auth-Token': '2c9a9879f8714d57b0ea2df6f199ee90'}
	// 	}
	// })	
	$http.defaults.headers.common['X-Auth-Token']= '2c9a9879f8714d57b0ea2df6f199ee90';
	$scope.titulo = "Ligas Europeas"
	$scope.ligas = FutResource.query();
	console.log($scope.ligas);

	 $scope.$watch('ligas.length', function(length) {
      if(length) { // <= first time length is changed from undefined to 0
        console.log('(watch) read more ' + $scope.ligas.length); // <= will log correct length

        var element = {};
        var arr = [];
        $scope.id = [];
        for(var i = 0; i < $scope.ligas.length; i++){
   			$scope.id.ident = i
        	console.log(element);
        }

        console.log($scope.id);

      }
    });


})

.controller("ligaController", function($scope, $http, LigaResource, $routeParams){
	$http.defaults.headers.common['X-Auth-Token']= '2c9a9879f8714d57b0ea2df6f199ee90';
	$scope.titulo="Ligas"
	$scope.estas = LigaResource.query({id: $routeParams.id});
	console.log($scope.estas);
})

.controller("equipoController", function($scope, $http, SingleEquipoResource, EquipoFixtures, $routeParams){
	$http.defaults.headers.common['X-Auth-Token']= '2c9a9879f8714d57b0ea2df6f199ee90';
	$scope.titulos = "Equipo"
	$scope.equipos = SingleEquipoResource.query({id: $routeParams.id});
	console.log($scope.equipos);

	$scope.fixtures = EquipoFixtures.query({id: $routeParams.id});
	console.log($scope.fixtures);

})

.controller("TeamsController", function($scope, $http, $routeParams){

	//EXTREMADAMENTE IMPORTANTE :

	$http.defaults.headers.common['X-Auth-Token']= '2c9a9879f8714d57b0ea2df6f199ee90';
	FutResource.get(function(data){
		$scope.ligas = data;
	});
	console.log($scope.teams);
})