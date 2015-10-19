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
    'ngSanitize',
    'ui.router',
    'ui.bootstrap',
    'ui.router.tabs'
  ])
  .config(['$stateProvider', '$urlRouterProvider',
    function ($stateProvider, $urlRouterProvider) {

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
    }]);
