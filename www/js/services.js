angular.module('starter.services', ['ionic'])
    .service('myTools', function($ionicPopup, $timeout) {
        this.alertError = function(errorMsg) {
            var myPopup = $ionicPopup.show({
                template: '<h3 class="text-center">' + errorMsg + '</h3>',
                title: '提示'
            });
            $timeout(function() {
                myPopup.close();
            }, 1000);
            return myPopup;
        }
    })