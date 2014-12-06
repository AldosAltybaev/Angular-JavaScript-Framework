var CinemaApp = angular.module('CinemaApp', ['ngRoute', 'ngMessages']);

CinemaApp.config(function ($routeProvider) {
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
        var currentYear = new Date().getFullYear();

        $scope.currentMovie = {
            title: null,
            year: currentYear
        };

        $scope.addMovie = function () {
            Movies.add($scope.currentMovie.title, $scope.currentMovie.year);
            $scope.currentMovie.title = null;
            $scope.currentMovie.year = currentYear;
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

CinemaApp
    .directive('moviePoster', function () {
        return {
            link: function ($scope, element, attrs) {
                $scope.src = attrs.src;
            },
            templateUrl: 'views/partials/poster.html'
        };
    });
