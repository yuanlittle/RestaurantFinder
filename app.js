(function(){
    var app= angular.module('myApp',[]);
    app.controller('myCtrl',function($scope,$http){
        $scope.favList = [];
        $scope.searchAddress=function () {
            var obj={
                'FOOD':$scope.food,
                'ADDRESS':$scope.address
            };
            $http.post('YelpAPI.php',obj).then(function(response){
                $scope.myData=response.data;
		    for (var i=0;i<$scope.myData.businesses.length;i++){
                $scope.myData.businesses[i].marked='false';
                $scope.initMap();

            }
            },function (response) {
                $scope.myData="something wrong";
            });
        };
        
        $scope.add = function() {
		    for (var i=0;i<$scope.myData.businesses.length;i++){
                if ($scope.favList.includes($scope.myData.businesses[i])){
                    continue;
                }
		        if ($scope.myData.businesses[i].marked===true){
					$scope.favList.push($scope.myData.businesses[i]);
                }
            }
		};
		$scope.remove=function(){
		    for (var i=0;i<$scope.favList.length;i++){
		        if ($scope.favList[i].marked===true){
					$scope.favList.splice(i,1);
                    i=i-1;
                }
            }

        };
        $scope.initMap=function(){
            var labels = '12345678';
            var mapDiv = document.getElementById('map');
            var map = new google.maps.Map(mapDiv, {
                center: {lat: $scope.myData.region.center.latitude, lng: $scope.myData.region.center.longitude},
                zoom: 12
            });
            for (var i=0;i<$scope.myData.businesses.length;i++){
                var marker = new google.maps.Marker({
                    position: {lat: $scope.myData.businesses[i].location.coordinate.latitude, lng: $scope.myData.businesses[i].location.coordinate.longitude},
                    map: map,
                    title: $scope.myData.businesses[i].name,
                    label: labels[i]
                });
            }
        }

    });

})();