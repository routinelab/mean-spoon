angular.module('app').service('userService', function($http) {
    var service = this;
    service.getUser = function() {
        return $http.get('/api/users', {
            headers: { 'x-auth': this.token }
        });
    };
    service.login = function(username, password) {
        return $http.post('/api/sessions', {
            username: username,
            password: password
        }).then(function(val) {
            service.token = val.data;
            $http.defaults.headers.common['x-auth'] = val.data;
            return service.getUser();
        });
    };
    service.register = function (username, password) {
        return $http.post('/api/users', {
            username: username, password: password
        }).then(function () {
            return service.login(username, password)
        });
    }
});

