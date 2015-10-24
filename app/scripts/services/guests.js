'use strict';

angular.module('shufflingPines.services')

  /*=============================================
   =                   Guests                   =
   =============================================*/
  .factory('Guests', ['localStorageService',
    function ($localStorageService) {
      var guests = {};

      guests.addGuest = function () {

      };

      guests.removeGuest = function () {

      };

      guests.editGuest = function () {

      };

      guests.getGuests = function () {

      };

      return guests;
    }]);
