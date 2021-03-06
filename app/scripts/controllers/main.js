'use strict';

/**
 * @ngdoc function
 * @name shufflingPines.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the shufflingPines
 */
angular.module('shufflingPines.controllers')
  .controller('MainCtrl', [function () {
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
