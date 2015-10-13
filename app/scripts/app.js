'use strict';

/**
 * @ngdoc overview
 * @name shufflingPines
 * @description
 * # shufflingPines
 *
 * Main module of the application.
 */
angular
  .module('shufflingPines', [
    'ngAnimate',
    'ngRoute',
    'ngSanitize'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/form', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl',
        controllerAs: 'main'
      })
      .when('/guests', {
        templateUrl: 'views/guests.html',
        controller: 'GuestsCtrl',
        controllerAs: 'guests'
      })
      .otherwise({
        redirectTo: '/form'
      });
  });
