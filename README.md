# mean-spoon
MEAN 스택을 사용한 모던 웹 개발 입문 - 정리

## bootstrip css CDN 
https://maxcdn.bootstrapcdn.com/bootstrap/3.3.4/css/bootstrap.min.css

## angularjs CDN
https://ajax.googleapis.com/ajax/libs/angularjs/1.3.15/angular.min.js

    Webstorm 에서 Alt + Enter 를 쳐서 download library 선택 local로 둔다.



## Chapter 5 - 소스수정
    #static.js
    res.sendfile('laytouts/posts.html');
    ->
    var path = required('path');
    res.sendFile(path.resolve('layouts/posts.html')); // express deprecated res.sendfile: Use res.sendFile
