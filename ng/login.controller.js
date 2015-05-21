angular.module('app').controller('loginController', function($scope, userService) {
    $scope.login = function(username, password) {
        userService.login(username, password)
            .then(function(user) {
                $scope.$emit('login', user);
            });
    };
});
