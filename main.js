(function(){
    var app=angular.module('myApp',[]);
    app.controller('myCtrl',function($scope){
        $scope.yelp= require('yelp');
    });

    var yelp=new Yelp({
        consumer_key: 'laEGu_YZFJGiw4yQ_VdV7g',
        consumer_secert: '56NJqjBf9DiuET1KT6ME7c1sGx8',
        token: 'HVmexPdakMVk_GDkmpSlnsOJjLpN8oUQ',
        token_secret: 'a0EJctylpCeLSL1B6SoAniXz2-s',
    });

    $scope
})();