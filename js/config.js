angular.module("quickDemoMovies")
  .config(function($routeProvider) {

    $routeProvider
      .when('/upcoming',{
        templateUrl: 'templates/main.html',
        controller: 'UpcomingController'
      })
      .when('/popular',{
        templateUrl: 'templates/main.html',
        controller: 'PopularController'
      })
      .when('/nowplaying',{
        templateUrl: 'templates/main.html',
        controller: 'NowPlayingController'
      })
      .when('/toprated',{
        templateUrl: 'templates/main.html',
        controller: 'TopRatedController'
      })
      .otherwise('/popular')

  })