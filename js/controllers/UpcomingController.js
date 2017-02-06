angular.module("quickDemoMovies")
  .controller('UpcomingController', function($scope,MoviesFactory) {

    $scope.section = "Upcoming Movies"
    MoviesFactory.getUpcoming()
      .then( function(response) {
        $scope.movies = response.data.results
      })

  })