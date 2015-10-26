'use strict';

/**
 * @ngdoc function
 * @name shufflingPines.controller:FormCtrl
 * @description
 * # FormCtrl
 * Controller of the shufflingPines
 */
angular.module('shufflingPines.controllers')
  .controller('FormCtrl', ['Guests', function (Guests) {
    var that = this;
    /**
     * Form submit
     */
    this.submit = function (guest) {
      console.log(guest);
    };
  }]);
