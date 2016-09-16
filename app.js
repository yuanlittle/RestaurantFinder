(function(){
    var app= angular.module('myApp',[]);
    app.controller('myCtrl',function($scope,$http){
        $scope.searchAddress=function () {
            $scope.myData="";
            var obj={
                'FOOD':$scope.food,
                'ADDRESS':$scope.address
            };
            $http.post('YelpAPI.php',obj).then(function(response){
                $scope.myData=response.data;
            },function (response) {
                $scope.myData="something wrong";
            });
        };

    });

})();