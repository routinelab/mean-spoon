var app = angular.module('app', []);

app.service('postsService', function($http) {
    this.fetch = function() {
        return $http.get('/api/posts');
    };
    this.create = function(post) {
        return $http.post('/api/posts', post);
    }
});

app.controller('postsController', function($scope, postsService) {
    $scope.addPost = function() {
        if($scope.postBody) {
            postsService.create({
                username: 'routine',
                body: $scope.postBody
            }).success(function(post) {
                $scope.posts.unshift(post);
                $scope.postBody = null;
            })
        };
    };

    postsService.fetch().success(function(posts) {
        $scope.posts = posts;
    });
});
