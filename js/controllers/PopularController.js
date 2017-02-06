angular.module("quickDemoMovies")
  .controller('PopularController', function($scope, MoviesFactory) {

    $scope.section = "Popular Movies"
    MoviesFactory.getPopular()
      .then( function(response) {
        $scope.movies = response.data.results
      })

  })