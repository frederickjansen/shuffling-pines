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
    /**
     * Remove a guest by setting the deleted flag to true
     * @param id Guest id to remove
     */
    this.removeGuest = function (id) {
      if (confirm('Are you sure you want to delete this guest?')) {
        GuestService.removeGuest(id);
        this.allGuests = this.getGuests();
      }
    };

    /**
     * Edit a guest
     * @param guestId Object
     * @param data
     */
    this.editGuest = function (guestId, data) {
      data.id = guestId;
      data.deleted = false;
      GuestService.editGuest(guestId, data);
    };

    /**
     * Get all guests
     */
    this.getGuests = function () {
      return GuestService.getGuests();
    };

    /**
     * Defines which status select items are shown
     * @param status
     * @param inputField
     * @returns {boolean}
     */
    this.showStatus = function (status, inputField) {
      return status === inputField;
    };

    // Select when status is dropoff
    this.dropoffStatus = [
      {value: 'dropoff', text: 'Drop-off'},
      {value: 'arrived', text: 'Arrived'}
    ];
    // Select when status is pickup
    this.pickupStatus = [
      {value: 'pickup', text: 'Pick-up'},
      {value: 'arrived', text: 'Arrived'}
    ];
    // Select when status is arrived
    this.arrivedStatus = [
      {value: 'arrived', text: 'Arrived'},
      {value: 'pickup', text: 'Pick-up'}
    ];
    // Get all guests to show in table
    this.allGuests = this.getGuests();
    // Start date picker not opened
    this.picker = {opened: false};

  }]);
