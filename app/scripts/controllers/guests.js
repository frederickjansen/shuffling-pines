'use strict';

/**
 * @ngdoc function
 * @name shufflingPines.controller:GuestsCtrl
 * @description
 * # GuestsCtrl
 * Controller of the shufflingPines
 */
angular.module('shufflingPines.controllers')
  .controller('GuestsCtrl', ['Guests', function (Guests) {
    this.addGuest = function () {
      Guests.addGuest();
    };

    this.removeGuest = function () {
      Guests.removeGuest();
    };

    this.editGuest = function () {
      Guests.editGuest();
    };

    this.getGuests = function () {
      Guests.getGuests();
    };
  }]);
