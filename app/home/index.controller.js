(function () {
    'use strict';

    angular
        .module('app')
        .controller('Home.IndexController', Controller);

    function Controller(UserService,UtilityService) {
        var vm = this;
        vm.checkServiceWorking = checkServiceWorking;
        
        vm.user = null;

        initController();

        function initController() {
            // get current user
            UserService.GetCurrent().then(function (user) {
                UtilityService.CurrentUser = user;
                console.log(user);
                vm.user = user;
            });
        }

        function checkServiceWorking(){
            console.log("Called");
            console.log(UtilityService.CurrentUser);
        }
    }

})();