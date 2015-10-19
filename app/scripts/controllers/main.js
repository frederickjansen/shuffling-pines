'use strict';

/**
 * @ngdoc function
 * @name shufflingPines.controller:GuestsCtrl
 * @description
 * # AboutCtrl
 * Controller of the shufflingPines
 */
angular.module('shufflingPines')
  .controller('MainCtrl', ['$scope', function ($scope) {
    this.tabData   = [
      {
        heading: 'Form',
        route:   'main.form'
      },
      {
        heading: 'Guests',
        route:   'main.guests'
      }
    ];
  }]);
