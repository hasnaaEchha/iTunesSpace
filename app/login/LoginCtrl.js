/**
 * Created by hassna on 19/08/2015.
 */
(function(){
    'use strict';

    angular.module('itunes')
        .controller('LoginCtrl',[
            '$location',
            '$window',
            '$timeout',
            'manageLogin',
            'notifier',
            LoginCtrl]);
    function LoginCtrl($location,$window,$timeout,manageLogin,notifier){
        var vm=this;
        vm.error=false;
        vm.signIn=function() {
            manageLogin.isClient(vm.userName,vm.password).then(function(result){
                if(result.success){
                    notifier.notify("connected");
                    $timeout(function(){
                        $location.url("/");
                        $window.location.reload();
                    },1000)
                }
                else{
                    vm.error=true;
                }

            });
        };

    }

}());
