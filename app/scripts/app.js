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
    'monospaced.elastic',
    'xeditable'
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
          controller: 'FormCtrl as form'
        })

        .state('main.guests', {
          url: '/guests',
          templateUrl: 'views/guests.html',
          controller: 'GuestsCtrl as guests'
        });

      $urlRouterProvider.otherwise('/form');
    }])
  .run(['editableOptions', function(editableOptions) {
    editableOptions.theme = 'bs3';
  }]);

// Declare modules
angular.module('shufflingPines.controllers', []);
angular.module('shufflingPines.services', []);
angular.module('shufflingPines.filters', []);
