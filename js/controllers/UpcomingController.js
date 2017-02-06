angular.module("quickDemoMovies")
  .controller('UpcomingController', function($scope,$rootScope,MoviesFactory) {

    $rootScope.section = 'upcoming'
    $scope.title = "Upcoming Movies"
    MoviesFactory.getUpcoming()
      .then( function(response) {
        $scope.movies = response.data.results
      })

  })