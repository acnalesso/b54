'use strict';

/**
 * @ngdoc overview
 * @name b54App
 * @description
 * # b54App
 *
 * Main module of the application.
 */
angular
  .module('b54App', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
