angular.module("quickDemoMovies")
  .controller('TopRatedController', function($scope, $rootScope, MoviesFactory) {

    $rootScope.section = 'toprated'
    $scope.title = "Top Rated movies"
    MoviesFactory.getTopRated()
      .then( function(response) {
        $scope.movies = response.data.results
      })

  })