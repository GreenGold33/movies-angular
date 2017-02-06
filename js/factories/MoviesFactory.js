angular.module("quickDemoMovies")
  .factory("MoviesFactory", function($http) {

    var apiKey = 'ba09f3c8c6c830377b422df18cfa833e'

    function getPopular(){
      var url = 'https://api.themoviedb.org/3/movie/popular?api_key=<%KEY%>'
      url = url.replace('<%KEY%>',apiKey)
      return $http.get(url)
    }

    function getUpcoming(){
      var url = 'https://api.themoviedb.org/3/movie/upcoming?api_key=<%KEY%>'
      url = url.replace('<%KEY%>',apiKey)
      return $http.get(url)
    }

    function getNowPlaying(){
      var url = 'https://api.themoviedb.org/3/movie/now_playing?api_key=<%KEY%>'
      url = url.replace('<%KEY%>',apiKey)
      return $http.get(url)
    }

    function getTopRated(){
      var url = 'https://api.themoviedb.org/3/movie/top_rated?api_key=<%KEY%>'
      url = url.replace('<%KEY%>',apiKey)
      return $http.get(url)
    }

    return {
      getPopular: getPopular,
      getUpcoming: getUpcoming,
      getNowPlaying: getNowPlaying,
      getTopRated: getTopRated
    }

  })
