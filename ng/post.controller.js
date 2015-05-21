angular.module('app').controller('postsController', function($scope, postsService) {
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
