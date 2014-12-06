var CinemaApp = angular.module('CinemaApp',['ngRoute']);

CinemaApp.config(function($routeProvider) {
    $routeProvider
        .when('/add', {
            templateUrl: 'views/add.html',
            controller: 'AddCtrl'
        })
        .when('/list', {
            templateUrl: 'views/list.html',
            controller: 'ListCtrl'
        })
        .otherwise({
            redirectTo: '/add'
        });
});

CinemaApp
    .controller('ListCtrl', function ($scope, Movies) {
        $scope.getMovies = Movies.get;
    });

CinemaApp
    .controller('AddCtrl', function ($scope, Movies) {
        $scope.currentMovie = {
            title: null,
            year: null
        };

        $scope.addMovie = function () {
            Movies.add($scope.currentMovie.title, $scope.currentMovie.year);
            $scope.currentMovie.title = null;
            $scope.currentMovie.year = null;
        };

    });

CinemaApp
    .factory('Movies', function () {
        var movies = [
            {title: 'Пираты силиконовой долины', year: 1999, img: 'silicon valley pirates.jpg'},
            {title: 'Социальная сеть', year: 2010, img: 'social-network.jpg'},
            {title: 'Джобс: Империя соблазна', year: 2013}
        ];

        return {
            add: function (title, year) {
                movies.push({title: title, year: year});
            },
            get: function () {
                return movies;
            }
        };
    });
