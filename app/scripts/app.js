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
    'shufflingPines.controllers',
    'shufflingPines.services',
    'shufflingPines.filters',
    'ngAnimate',
    'ngSanitize',
    'ui.router',
    'ui.bootstrap',
    'ui.router.tabs',
    'LocalStorageModule',
    'monospaced.elastic'
  ])
  .config(['$stateProvider', '$urlRouterProvider', '$locationProvider',
    function ($stateProvider, $urlRouterProvider, $locationProvider) {

      $stateProvider

        // Setup an abstract state for the tabs directive
        .state('main', {
          abstract: true,
          templateUrl: 'views/main.html',
          controller: 'MainCtrl as main'
        })

        .state('main.form', {
          url: '/form',
          templateUrl: 'views/form.html',
          controllerAs: 'FormCtrl as form'
        })

        .state('main.guests', {
          url: '/guests',
          templateUrl: 'views/guests.html',
          controllerAs: 'GuestsCtrl as guests'
        });

      $urlRouterProvider.otherwise('/form');
      //$locationProvider.html5Mode(true);
    }]);

// Declare modules
angular.module('shufflingPines.controllers', []);
angular.module('shufflingPines.services', []);
angular.module('shufflingPines.filters', []);
