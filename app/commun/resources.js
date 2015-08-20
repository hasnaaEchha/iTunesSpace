/**
 * Created by hassna on 19/08/2015.
 */
(function(){
    "use strict";
    angular.module("itunes")
        .service('Resources',['$resource',Resources]);
    function Resources($resource){
        return{
            ItunesSearch:$resource('https://itunes.apple.com/:action', {
                    action: "search",
                    callback: 'JSON_CALLBACK'
                }, {
                        get: {
                            method: 'JSONP'
                        }
                    }
                ),
            ClientsResource:$resource("/data/clients")
        }
    }
}())

