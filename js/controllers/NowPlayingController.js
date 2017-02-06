angular.module("quickDemoMovies")
  .controller('NowPlayingController', function($scope,MoviesFactory) {

    $scope.section = "Now Playing movies"
    MoviesFactory.getNowPlaying()
      .then( function(response) {
        $scope.movies = response.data.results
      })

  })