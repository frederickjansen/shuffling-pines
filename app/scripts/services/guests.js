'use strict';

angular.module('shufflingPines.services')

  /*=============================================
   =                   Guests                   =
   =============================================*/
  .factory('GuestService', ['localStorageService',
    function (localStorageService) {
      var guests = {};

      guests.addGuest = function (guest) {
        var allGuests = localStorageService.get('guests');
        allGuests.push(guest);
        localStorageService.set('guests', allGuests);
      };

      guests.removeGuest = function () {

      };

      guests.editGuest = function () {

      };

      guests.getGuests = function () {
        var guests = localStorageService.get('guests');
        if (!guests) {
          guests = generateGuests();
        }

        return guests;
      };

      function generateGuests() {
        var guestsObj = [
          {
            name: "John Doe",
            transitionDate: new Date(2015, 12, 20),
            status: "dropoff",
            location: "123 St\r\nBoston",
            deleted: false
          }, {
            name: "Jane Doe",
            transitionDate: new Date(2015, 12, 21),
            status: "pickup",
            location: "321 Ave\r\nCambridge",
            deleted: false
          }, {
            name: "Joe Johnson",
            transitionDate: new Date(2015, 12, 22),
            status: "dropoff",
            location: "1 Rd\r\nSomerville",
            deleted: false
          }
        ];

        localStorageService.set('guests', guestsObj);
      }

      return guests;
    }]);
