angular.module('app').controller('applicationController', function($scope) {
    $scope.$on('login', function(_, user) {
        $scope.currentUser = user.data;
        console.log(user);
    })
})
