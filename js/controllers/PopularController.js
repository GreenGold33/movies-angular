angular.module("quickDemoMovies")
  .controller('PopularController', function($scope, $rootScope, MoviesFactory) {

    $rootScope.section = 'popular'
    $scope.title = "Popular Movies"
    MoviesFactory.getPopular()
      .then( function(response) {
        $scope.movies = response.data.results
      })

  })