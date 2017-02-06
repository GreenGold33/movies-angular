angular.module("quickDemoMovies")
  .controller('TopRatedController', function($scope,MoviesFactory) {

    $scope.section = "Top Rated movies"
    MoviesFactory.getTopRated()
      .then( function(response) {
        $scope.movies = response.data.results
      })

  })