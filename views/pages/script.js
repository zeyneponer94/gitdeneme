var testApp = angular.module("testApp", []);
testApp.controller('testController' , function ($scope, $http, $window) {
    //$return dene!
    $scope.getRequest = function () {
  
    } 
    
    $scope.accessDatabase = function () {

    }

/*
        $http({
            url: 'https://thworkorderfapp.azurewebsites.net/api/HttpTriggerSqlDatabase', 
             method: "GET",
            params: {username: '',
                     password: ''
                    }
        }) 
        .then(function(response){
            $scope.data = response.data;
         })
        .error(function (data, status, headers, config) {
        });*/
 
});


