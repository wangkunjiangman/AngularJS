
    var app=angular.module("snowApp",['ngRoute']);
    app.config(['$routeProvider', function($routeProvider) {
        $routeProvider
            .when('/',{
                templateUrl: '/templates/home.html',
                controller: 'loginController'
            })
            .when('/main',{
                templateUrl: '/templates/main.html' //链接对应的html文件
            })
            .otherwise({
                redictTo:"/"
            })
    }])
