angular.module("quickDemoMovies")
  .controller('PopularController', function($http, $scope, $rootScope, MoviesFactory) {

    $rootScope.section = 'popular'
    $scope.title = "Popular Movies"
    MoviesFactory.getPopular()
      .then( function(movies) {
        $scope.movies = movies;
      })

  })