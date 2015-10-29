'use strict';

/**
 * @ngdoc function
 * @name shufflingPines.controller:FormCtrl
 * @description
 * # FormCtrl
 * Controller of the shufflingPines
 */
angular.module('shufflingPines.controllers')
  .controller('FormCtrl', ['$state', 'GuestService', function ($state, GuestService) {
    /**
     * Form submit
     */
    this.submit = function (guest) {
      console.log(guest);
    };
  }]);
