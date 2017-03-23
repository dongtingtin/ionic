// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.services' is found in services.js
// 'starter.controllers' is found in controllers.js
angular.module('starter', ['ionic', 'starter.controllers', 'starter.services'])

.run(function($ionicPlatform) {
    $ionicPlatform.ready(function() {
        // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
        // for form inputs)
        if (window.cordova && window.cordova.plugins && window.cordova.plugins.Keyboard) {
            cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
            cordova.plugins.Keyboard.disableScroll(true);

        }
        if (window.StatusBar) {
            // org.apache.cordova.statusbar required
            StatusBar.styleDefault();
        }
    });
})

.config(function($stateProvider, $urlRouterProvider) {

    // Ionic uses AngularUI Router which uses the concept of states
    // Learn more here: https://github.com/angular-ui/ui-router
    // Set up the various states which the app can be in.
    // Each state's controller can be found in controllers.js
    $stateProvider
        .state('signin', {
            url: '/signin',
            templateUrl: 'templates/signin.html',
            controller: 'signinCtrl'
        })
        .state('signup', {
            url: '/signup',
            templateUrl: 'templates/signup.html',
            controller: 'signupCtrl'
        })
        .state('forgot-password', {
            url: '/forgot-password',
            templateUrl: 'templates/forgot-password.html',
            controller: 'forgotPasswordCtrl'
        })
        .state('home', {
            url: '/home',
            abstract: true,
            templateUrl: 'templates/home.html',
            controller: 'homeCtrl'
        })
        .state('home.index', {
            url: '/index',
            views: {
                menuContent: {
                    templateUrl: 'templates/index.html',
                    controller: 'indexCtrl'
                }
            }
        })
        .state('cake1', {
            url: '/cake1',
            templateUrl: 'templates/cake1.html',
            controller: 'cake1Ctrl'
        })
        .state('menu1', {
            url: '/menu1',
            templateUrl: 'templates/menu1.html',
            controller: 'menu1Ctrl'
        })
        .state('banner1', {
            url: '/banner1',
            templateUrl: 'templates/banner1.html',
            controller: 'banner1Ctrl'
        })
        .state('banner2', {
            url: '/banner2',
            templateUrl: 'templates/banner2.html',
            controller: 'banner2Ctrl'
        })
        // if none of the above states are matched, use this as the fallback
    $urlRouterProvider.otherwise('/signin');

});