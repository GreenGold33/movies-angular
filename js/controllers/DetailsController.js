(function() {

  angular.module("quickDemoMovies")
    .controller('DetailsController', DetailsController)

  function DetailsController( $routeParams, MoviesFactory ) {
    var vm = this;
    var idMovie = $routeParams.idMovie;
    MoviesFactory.getMovieDetails(idMovie)
      .then( function(movie) {
        vm.movie = movie;
      })
  }

})()
