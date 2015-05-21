angular.module('app').controller('registerController', function ($scope, userService, $location) {
    $scope.register = function (username, password) {
        userService.register(username, password)
            .then(function (user) {
                    $scope.$emit('login', user)
                    $location.path('/');
            });
    };
});