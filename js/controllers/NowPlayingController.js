angular.module("quickDemoMovies")
  .controller('NowPlayingController', function($scope, $rootScope, MoviesFactory) {

    $rootScope.section = 'nowplaying'
    $scope.title = "Now Playing movies"
    MoviesFactory.getNowPlaying()
      .then( function(response) {
        $scope.movies = response.data.results
      })

  })