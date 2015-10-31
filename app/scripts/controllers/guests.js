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
    /**
     * Remove a guest by setting the deleted flag to true
     * @param id Guest id to remove
     */
    var that = this;

    this.removeGuest = function (id) {
      if (confirm('Are you sure you want to delete this guest?')) {
        GuestService.removeGuest(id);
        this.allGuests = this.getGuests();
      }
    };

      GuestService.editGuest(id);
    };

    this.getGuests = function () {
      return GuestService.getGuests();
    };

    this.allGuests = this.getGuests();

    this.picker = { opened: false };
  }]);
