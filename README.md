# mean-spoon
Mean-Sample Test Project

## bootstrip css CDN 
https://maxcdn.bootstrapcdn.com/bootstrap/3.3.4/css/bootstrap.min.css

## angularjs CDN
https://ajax.googleapis.com/ajax/libs/angularjs/1.3.15/angular.min.js

    Webstorm 에서 Alt + Enter 를 쳐서 download library 선택 local로 둔다.



## Chapter 5 - error
    #static.js
    res.sendfile('laytouts/posts.html');
    ->
    var path = required('path');
    res.sendFile(paht.resolve('layouts/posts.html'));
