angular.module('app').config(function($routeProvider) {
    $routeProvider
        .when('/', {
            controller: 'postsController',
            templateUrl: '/templates/posts.html'
        })
        .when('/register', {
            controller: 'registerController',
            templateUrl: '/templates/register.html'
        })
        .when('/login', {
            controller: 'loginController',
            templateUrl: '/templates/login.html'
        });
});
