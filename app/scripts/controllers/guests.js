'use strict';

/**
 * @ngdoc function
 * @name shufflingPines.controller:GuestsCtrl
 * @description
 * # GuestsCtrl
 * Controller of the shufflingPines
 */
angular.module('shufflingPines.controllers')
  .controller('GuestsCtrl', ['$timeout', 'GuestService', function ($timeout, GuestService) {
    var that = this;

    this.removeGuest = function (id) {
      if (confirm('Are you sure you want to delete this guest?')) {
        GuestService.removeGuest(id);
      }
    };

    this.editGuest = function (id) {
      GuestService.editGuest(id);
    };

    this.getGuests = function () {
      return GuestService.getGuests();
    };

    this.allGuests = this.getGuests();

    this.picker = { opened: false };
  }]);
