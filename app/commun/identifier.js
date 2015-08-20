/**
 * Created by hassna on 19/08/2015.
 */
angular.module("itunes").factory("identity",["$cookieStore","$location","$window","$localStorage",identity]);
function identity($cookieStore,$location,$window,$localStorage){
    return {
        currentUser:  $cookieStore.get('client'),
        isAuthenticated: function(){
            this.currentUser=$cookieStore.get('client');
            return !!this.currentUser;
        },
        setClient:function(client){
            $cookieStore.put('client',client)
        },
        logout:function(){
            if($cookieStore.get('client'))
                $cookieStore.remove('client');
            $localStorage.favorites=undefined;
            $location.url("/");
            $window.location.reload();
        }
    }
}
