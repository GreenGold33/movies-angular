angular.module("quickDemoMovies")
  .config(function($routeProvider) {

    $routeProvider
      .when('/upcoming',{
        templateUrl: 'templates/main.html',
        controller: 'UpcomingController'
      })
      .when('/popular',{
        templateUrl: 'templates/main-popular.html',
        controller: 'PopularController'
      })
      .when('/nowplaying',{
        templateUrl: 'templates/main-vm.html',
        controller: 'NowPlayingController',
        controllerAs: 'vm'
      })
      .when('/toprated',{
        templateUrl: 'templates/main.html',
        controller: 'TopRatedController'
      })
      .when('/details/:idMovie',{
        templateUrl: 'templates/details.html',
        controller: 'DetailsController',
        controllerAs: 'vm'
      })
      .otherwise('/popular')

  })