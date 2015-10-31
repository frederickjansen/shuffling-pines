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
      guest.deleted = false;
      GuestService.addGuest(guest);
      console.log(GuestService.getGuests());
      $state.go('main.guests');
    };

    // Start date picker not opened
    this.picker = {opened: false};
  }]);
