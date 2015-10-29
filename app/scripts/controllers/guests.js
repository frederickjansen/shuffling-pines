'use strict';

/**
 * @ngdoc function
 * @name shufflingPines.controller:GuestsCtrl
 * @description
 * # GuestsCtrl
 * Controller of the shufflingPines
 */
angular.module('shufflingPines.controllers')
  .controller('GuestsCtrl', ['GuestService', function (GuestService) {
    var that = this;

    this.addGuest = function (guest) {
      GuestService.addGuest(guest);
    };

    this.removeGuest = function () {
      GuestService.removeGuest();
    };

    this.editGuest = function () {
      GuestService.editGuest();
    };

    this.getGuests = function () {
      return GuestService.getGuests();
    };

    this.allGuests = this.getGuests();
  }]);
