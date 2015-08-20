/**
 * Created by hassna on 19/08/2015.
 */
(function(){
    'use strict';

    angular.module('itunes')
        .controller('ListCtrl',[
        "$scope",

            "manageList",

            ListCtrl]);
    function ListCtrl($scope,manageList){
        var vm=this;
        vm.manageList=manageList;
        vm.types=manageList.getTypes();
         vm.term="";
        vm.type="";
        var lengthItems=0;
        vm.pagination=manageList.getPaginationConfig();


        vm.pagination.setPage = function (pageNo) {
            vm.pagination.currentPage = pageNo;
        };

        vm.pagination.pageChanged = function() {
            if(lengthItems>=10*(vm.pagination.currentPage-1)+9)
                vm.artists=vm.artistsAll.slice(10*(vm.pagination.currentPage-1),10*(vm.pagination.currentPage-1)+9)
            else{
                vm.artists=vm.artistsAll.slice(10*(vm.pagination.currentPage-1),lengthItems)
            }


        };

        manageList.getArtistes(vm.term,vm.type).then(function(result){

                    vm.artistsAll=result.results;
                    lengthItems=vm.artistsAll.length
                    if(lengthItems<10){
                        vm.artists=vm.artistsAll
                    }
                    else{
                        vm.artists=vm.artistsAll.slice(0,9);
                    }
            vm.pagination.totalItems = lengthItems=vm.artistsAll.length

        });
         vm.search=function(){
             vm.pagination.currentPage=1;

            manageList.getArtistes(vm.term,vm.type).then(function(result){
                vm.artistsAll=result.results;
                lengthItems=vm.artistsAll.length;
                if(lengthItems<10){
                    vm.artists=vm.artistsAll
                }
                else{
                    vm.artists=vm.artistsAll.slice(0,9);
                }
                vm.pagination.totalItems = lengthItems;

            });
        }
        vm.add=function(trackId){
            manageList.addToFavorites(trackId);
        }

        $scope.status = {
            isFirstOpen: true,
            isFirstDisabled: false
        };


    }

}());
