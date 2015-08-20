/**
 * Created by hassna on 19/08/2015.
 */
angular.module("itunes").factory("manageList",["Resources","manageFavorites","identity","$q","$location","$localStorage",manageList]);
function manageList(Resources,manageFavorites,identity,$q,$location,$localStorage) {
var types=["movie","music","musicVideo","shortFilm","tvShow","all"];
    return {

        getArtistes: function (term, type) {
            var def = $q.defer();
            if(term.length==0){
                term="a";
            }
            Resources.ItunesSearch.get({term: term, type: type}, function (result) {
                    console.log(result);
                    def.resolve(result);
                },
                function (err) {

                })
            return def.promise;
        },
        getTypes:function(){
            return types;
        },
        addToFavorites:function(artiste){
            if(identity.isAuthenticated()){

                manageFavorites.add(artiste);
            }
            else{

                $location.url("//login");

            }

        },
        isFavorite:function(trackId){
            var tab=$localStorage.favorites;
            for(var  i=0;i<tab.length;i++){
                if(tab[i].trackId===trackId){
                    return true
                }
            }
            return false;


        },
        getPaginationConfig:function(){
            return {
                maxSize : 6,
            bigTotalItems :100,
            bigCurrentPage : 1,
              currentPage :1
            }
        }


    }
}