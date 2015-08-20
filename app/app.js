/**
 * Created by hassna on 19/08/2015.
 */
(function(){
    "use strict";
    var itunes=angular.module("itunes",["ui.router","ngResource","ui.bootstrap","ngCookies","ngStorage"]);
    itunes.config(["$stateProvider","$urlRouterProvider",itunesConf]);
    function itunesConf($stateProvider,$urlRouterProvider){
        $urlRouterProvider.otherwise("//list")
        $stateProvider
            .state("welcome",{
                url:"/",
                abstract:"true",
                templateUrl:"app/welcome/welcome.html",
                controller:function($scope,$window,identity){
                    $scope.identity=identity;
                    $scope.myInterval = 5000;
                    $scope.noWrapSlides = false;
                    var slides = $scope.slides = [];
                    $scope.addSlide = function(i) {
                        var newWidth = 600 + slides.length + 1;

                        slides.push({
                            image: '../../contents/images/'+i +'.jpg',
                            text: ['Store your favorites online','Have your own iTunes space','Manage it as you want','Welcome'][slides.length % 4]

                        });
                    };
                    for (var i=1; i<4; i++) {
                        $scope.addSlide(i);
                    }

                }
            })
            .state("welcome.listPublic",{
                url:"/list",
                templateUrl:"app/publicList/list.html",
                controller:"ListCtrl as vm",
                resolve:{
                    Resources:"Resources"

                }
            })
            .state("welcome.favorites",{
                url:"/favorites",
                templateUrl:"app/favoriteList/list.html",
                controller:"FavoriteCtrl as vm"
            })
            .state('welcome.login',{
                url:"/login",
                templateUrl:"app/login/login.html",
                controller:"LoginCtrl as vm"


            })


    }
}());