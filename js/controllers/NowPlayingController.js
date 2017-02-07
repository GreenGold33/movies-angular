(function() {

  angular.module("quickDemoMovies")
    .controller('NowPlayingController', NowPlayingController)

  function NowPlayingController( $rootScope, MoviesFactory) {

    var vm = this;

    $rootScope.section = 'nowplaying'
    vm.title = "Now Playing movies"
    MoviesFactory.getNowPlaying()
      .then( function(response) {
        vm.movies = response.data.results
      })

  }

})()
