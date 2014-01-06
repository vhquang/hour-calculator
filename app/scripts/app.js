'use strict';

angular.module('hourApp', [
  'ngResource',
  'ngRoute'
])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/time.html',
        controller: 'TimeCtrl'
      })
      .when('/main', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/time', {
        templateUrl: 'views/time.html',
        controller: 'TimeCtrl'
      })
      .when('/hour', {
        templateUrl: 'views/hour.html',
        controller: 'HourCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
