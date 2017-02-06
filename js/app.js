angular.module("quickDemoMovies",['ngRoute'])
  .factory("MoviesFactory", function($http) {

    var apiKey = 'ba09f3c8c6c830377b422df18cfa833e'

    function getPopular(){
      var url = 'https://api.themoviedb.org/3/movie/popular?api_key=<%KEY%>'
      var url = url.replace('<%KEY%>',apiKey)
      return $http.get(url)
    }

    function getUpcoming(){
      var url = 'https://api.themoviedb.org/3/movie/upcoming?api_key=<%KEY%>'
      var url = url.replace('<%KEY%>',apiKey)
      return $http.get(url)
    }

    function getNowPlaying(){
      var url = 'https://api.themoviedb.org/3/movie/now_playing?api_key=<%KEY%>'
      var url = url.replace('<%KEY%>',apiKey)
      return $http.get(url)
    }

    function getTopRated(){
      var url = 'https://api.themoviedb.org/3/movie/top_rated?api_key=<%KEY%>'
      var url = url.replace('<%KEY%>',apiKey)
      return $http.get(url)
    }

    return {
      getPopular: getPopular,
      getUpcoming: getUpcoming,
      getNowPlaying: getNowPlaying,
      getTopRated: getTopRated
    }

  })
  .controller('UpcomingController', function($scope,MoviesFactory) {

    $scope.section = "Upcoming Movies"
    MoviesFactory.getUpcoming()
      .then( function(response) {
        $scope.movies = response.data.results
      })

  })
  .controller('PopularController', function($scope,MoviesFactory) {

    $scope.section = "Popular Movies"
    MoviesFactory.getPopular()
      .then( function(response) {
        $scope.movies = response.data.results
      })

  })
  .controller('NowPlayingController', function($scope,MoviesFactory) {

    $scope.section = "Now Playing movies"
    MoviesFactory.getNowPlaying()
      .then( function(response) {
        $scope.movies = response.data.results
      })

  })
  .controller('TopRatedController', function($scope,MoviesFactory) {

    $scope.section = "Top Rated movies"
    MoviesFactory.getTopRated()
      .then( function(response) {
        $scope.movies = response.data.results
      })

  })
  .config(function($routeProvider) {

    $routeProvider
      .when('/upcoming',{
        templateUrl: 'templates/main.html',
        controller: 'UpcomingController'
      })
      .when('/popular',{
        templateUrl: 'templates/main.html',
        controller: 'PopularController'
      })
      .when('/nowplaying',{
        templateUrl: 'templates/main.html',
        controller: 'NowPlayingController'
      })
      .when('/toprated',{
        templateUrl: 'templates/main.html',
        controller: 'TopRatedController'
      })
      .otherwise('/popular')

  })