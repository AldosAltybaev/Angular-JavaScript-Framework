var cinemaModule = angular.module('CinemaApp',[]);

cinemaModule
    .controller('MovieCtrl', function ($scope) {
        $scope.currentMovie = {
            title: null,
            year: null
        };

        $scope.movies = [];

        $scope.addMovie = function () {
            $scope.movies.push({
                title: $scope.currentMovie.title,
                year: $scope.currentMovie.year
            });

            $scope.currentMovie.title = null;
            $scope.currentMovie.year = null;
        };

    });
