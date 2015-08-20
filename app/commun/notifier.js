/**
 * Created by hassna on 19/08/2015.
 */
angular.module("itunes").value("mvToastr",toastr);
angular.module("itunes").factory("notifier",["mvToastr",notifier]);
function notifier(mvToastr){
    return {
        notify:function(msg){
            mvToastr.success(msg);
        }
    }

}