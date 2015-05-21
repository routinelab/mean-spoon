angular.module("app",["ngRoute"]),angular.module("app").controller("postsController",["$scope","postsService",function(t,e){t.addPost=function(){t.postBody&&e.create({username:"routine",body:t.postBody}).success(function(e){t.posts.unshift(e),t.postBody=null})},e.fetch().success(function(e){t.posts=e})}]),angular.module("app").service("postsService",["$http",function(t){this.fetch=function(){return t.get("/api/posts")},this.create=function(e){return t.post("/api/posts",e)}}]),angular.module("app").config(["$routeProvider",function(t){t.when("/",{controller:"postsController",templateUrl:"/templates/posts.html"}).when("/register",{controller:"registerController",templateUrl:"/templates/register.html"}).when("/login",{controller:"loginController",templateUrl:"/templates/login.html"})}]);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1vZHVsZS5qcyIsInBvc3QuY29udHJvbGxlci5qcyIsInBvc3Quc2VydmljZS5qcyIsInJvdXRlcy5qcyJdLCJuYW1lcyI6WyJhbmd1bGFyIiwibW9kdWxlIiwiY29udHJvbGxlciIsIiRzY29wZSIsInBvc3RzU2VydmljZSIsImFkZFBvc3QiLCJwb3N0Qm9keSIsImNyZWF0ZSIsInVzZXJuYW1lIiwiYm9keSIsInN1Y2Nlc3MiLCJwb3N0IiwicG9zdHMiLCJ1bnNoaWZ0IiwiZmV0Y2giLCJzZXJ2aWNlIiwiJGh0dHAiLCJ0aGlzIiwiZ2V0IiwiY29uZmlnIiwiJHJvdXRlUHJvdmlkZXIiLCJ3aGVuIiwidGVtcGxhdGVVcmwiXSwibWFwcGluZ3MiOiJBQUFBQSxRQUFRQyxPQUFPLE9BQVMsWUNBeEJELFFBQVFDLE9BQU8sT0FBT0MsV0FBVyxtQkFBQSxTQUFBLGVBQW1CLFNBQVNDLEVBQVFDLEdBQ2pFRCxFQUFPRSxRQUFVLFdBQ1ZGLEVBQU9HLFVBQ05GLEVBQWFHLFFBQ1RDLFNBQVUsVUFDVkMsS0FBTU4sRUFBT0csV0FDZEksUUFBUSxTQUFTQyxHQUNoQlIsRUFBT1MsTUFBTUMsUUFBUUYsR0FDckJSLEVBQU9HLFNBQVcsUUFLOUJGLEVBQWFVLFFBQVFKLFFBQVEsU0FBU0UsR0FDbENULEVBQU9TLE1BQVFBLE9DZHZCWixRQUFRQyxPQUFPLE9BQU9jLFFBQVEsZ0JBQUEsUUFBZ0IsU0FBU0MsR0FDbkRDLEtBQUtILE1BQVEsV0FDVCxNQUFPRSxHQUFNRSxJQUFJLGVBRXJCRCxLQUFLVixPQUFTLFNBQVNJLEdBQ25CLE1BQU9LLEdBQU1MLEtBQUssYUFBY0EsT0NMeENYLFFBQVFDLE9BQU8sT0FBT2tCLFFBQUEsaUJBQU8sU0FBU0MsR0FDbENBLEVBQ0tDLEtBQUssS0FDRm5CLFdBQVksa0JBQ1pvQixZQUFhLDBCQUVoQkQsS0FBSyxhQUNGbkIsV0FBWSxxQkFDWm9CLFlBQWEsNkJBRWhCRCxLQUFLLFVBQ0ZuQixXQUFZLGtCQUNab0IsWUFBYSIsImZpbGUiOiJhcHAuanMiLCJzb3VyY2VzQ29udGVudCI6WyJhbmd1bGFyLm1vZHVsZSgnYXBwJywgWyAnbmdSb3V0ZScgXSk7XG4iLCJhbmd1bGFyLm1vZHVsZSgnYXBwJykuY29udHJvbGxlcigncG9zdHNDb250cm9sbGVyJywgZnVuY3Rpb24oJHNjb3BlLCBwb3N0c1NlcnZpY2UpIHtcbiAgICAkc2NvcGUuYWRkUG9zdCA9IGZ1bmN0aW9uKCkge1xuICAgICAgICBpZigkc2NvcGUucG9zdEJvZHkpIHtcbiAgICAgICAgICAgIHBvc3RzU2VydmljZS5jcmVhdGUoe1xuICAgICAgICAgICAgICAgIHVzZXJuYW1lOiAncm91dGluZScsXG4gICAgICAgICAgICAgICAgYm9keTogJHNjb3BlLnBvc3RCb2R5XG4gICAgICAgICAgICB9KS5zdWNjZXNzKGZ1bmN0aW9uKHBvc3QpIHtcbiAgICAgICAgICAgICAgICAkc2NvcGUucG9zdHMudW5zaGlmdChwb3N0KTtcbiAgICAgICAgICAgICAgICAkc2NvcGUucG9zdEJvZHkgPSBudWxsO1xuICAgICAgICAgICAgfSlcbiAgICAgICAgfTtcbiAgICB9O1xuXG4gICAgcG9zdHNTZXJ2aWNlLmZldGNoKCkuc3VjY2VzcyhmdW5jdGlvbihwb3N0cykge1xuICAgICAgICAkc2NvcGUucG9zdHMgPSBwb3N0cztcbiAgICB9KTtcbn0pO1xuIiwiYW5ndWxhci5tb2R1bGUoJ2FwcCcpLnNlcnZpY2UoJ3Bvc3RzU2VydmljZScsIGZ1bmN0aW9uKCRodHRwKSB7XG4gICAgdGhpcy5mZXRjaCA9IGZ1bmN0aW9uKCkge1xuICAgICAgICByZXR1cm4gJGh0dHAuZ2V0KCcvYXBpL3Bvc3RzJyk7XG4gICAgfTtcbiAgICB0aGlzLmNyZWF0ZSA9IGZ1bmN0aW9uKHBvc3QpIHtcbiAgICAgICAgcmV0dXJuICRodHRwLnBvc3QoJy9hcGkvcG9zdHMnLCBwb3N0KTtcbiAgICB9O1xufSk7XG5cbiIsImFuZ3VsYXIubW9kdWxlKCdhcHAnKS5jb25maWcoZnVuY3Rpb24oJHJvdXRlUHJvdmlkZXIpIHtcbiAgICAkcm91dGVQcm92aWRlclxuICAgICAgICAud2hlbignLycsIHtcbiAgICAgICAgICAgIGNvbnRyb2xsZXI6ICdwb3N0c0NvbnRyb2xsZXInLFxuICAgICAgICAgICAgdGVtcGxhdGVVcmw6ICcvdGVtcGxhdGVzL3Bvc3RzLmh0bWwnXG4gICAgICAgIH0pXG4gICAgICAgIC53aGVuKCcvcmVnaXN0ZXInLCB7XG4gICAgICAgICAgICBjb250cm9sbGVyOiAncmVnaXN0ZXJDb250cm9sbGVyJyxcbiAgICAgICAgICAgIHRlbXBsYXRlVXJsOiAnL3RlbXBsYXRlcy9yZWdpc3Rlci5odG1sJ1xuICAgICAgICB9KVxuICAgICAgICAud2hlbignL2xvZ2luJywge1xuICAgICAgICAgICAgY29udHJvbGxlcjogJ2xvZ2luQ29udHJvbGxlcicsXG4gICAgICAgICAgICB0ZW1wbGF0ZVVybDogJy90ZW1wbGF0ZXMvbG9naW4uaHRtbCdcbiAgICAgICAgfSk7XG59KTtcbiJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==