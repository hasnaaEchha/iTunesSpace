/**
 * Created by hassna on 19/08/2015.
 */
angular.module("itunes").factory("manageFavorites",["$localStorage",manageFavorites]);
function manageFavorites( $localStorage) {

    return {

        add: function (artist) {
            $localStorage.favorites.push(artist);

        },
        getFavorites:function(){
            return $localStorage.favorites;
        },
        remove:function(trackId){
            var tab=$localStorage.favorites;
            for(var  i=0;i<tab.length;i++){
                if(tab[i].trackId===trackId){
                    tab.splice(i,1);
                }
            }


        }




    }
}