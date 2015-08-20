/**
 * Created by hassna on 19/08/2015.
 */
(function(){
    'use strict';

    angular.module('itunes')
        .controller('FavoriteCtrl',[
            "$scope",
            "manageFavorites",
            FavoriteCtrl]);
    function FavoriteCtrl($scope,manageFavorites){

        var vm=this;
        vm.manageFavorites=manageFavorites;


        vm.artists=manageFavorites.getFavorites();

        vm.remove=function(trackId){
            manageFavorites.remove(trackId);
        }

        $scope.status = {
            isFirstOpen: true,
            isFirstDisabled: false
        };


    }

}());
