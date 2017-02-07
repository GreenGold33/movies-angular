angular.module("quickDemoMovies")
  .controller('PopularController', function($scope, $rootScope, MoviesFactory) {

    $rootScope.section = 'popular'
    $scope.title = "Popular Movies"
    MoviesFactory.getPopular()
      .then( function(movies) {
        console.log(movies);
        $scope.movies = movies;
      })

  })