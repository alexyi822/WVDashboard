(function(){

	'use strict';

	angular.module('core')
		.config(Config);

		Config.$inject = ['$routeProvider'];

		function Config($routeProvider){

			$routeProvider
			.when('/', {
				templateUrl: '/modules/core/views/core.client.view.html'
			})
			.when('/building/:address',{
					templateUrl: '/modules/core/building.client.view.html',
					controller: 'Building',
					controllerAs: 'B'
			})
			.otherwise({

				redirectTo:'/'

			});

		}


})();
