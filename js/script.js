(function(){
    var app = angular.module('tutorial', []);

    app.factory('Data', function() {  //this is a service
        return {message: "message from a factory"}
    })
    app.controller('TutController', ['$scope', 'Data', function($scope, Data){
        $scope.master =  {};

        $scope.update = function(user) {
            $scope.master = angular.copy(user);
        };

        $scope.reset = function() {
            $scope.user = angular.copy($scope.master);
        };

        $scope.reset();
        $scope.test = "this is a test"
        $scope.data = Data.message;

        $scope.myMethod = function() {
            return "this is a method"
        }
    }]);

})();