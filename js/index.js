/**
 * Created by wk on 2017/5/14.
 */
app.controller('loginController',function ($scope,$http,$location) {
    $scope.userdata={};
    $scope.submitForm=function () {
        if($scope.loginForm.$invalid){
            $scope.formMsg="请检查表单！";
        }else if($scope.loginForm.$valid){
            var dataForm=$scope.userdata;
           $http.post("api/loginForm",dataForm).then(function(data){
               $location.path("/main")
           })
        }
    }
})