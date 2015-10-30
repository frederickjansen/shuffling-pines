'use strict';

angular.module('shufflingPines.services')

  /*=============================================
   =                   Guests                   =
   =============================================*/
  .factory('GuestService', ['localStorageService',
    function (localStorageService) {
      var guests = {};

      guests.addGuest = function (guest) {
        var allGuests = this.getGuests();
        allGuests.push(guest);
        localStorageService.set('guests', allGuests);
      };

      guests.removeGuest = function (id) {
        var guests = this.getGuests();
        guests[id].deleted = true;
        localStorageService.set('guests', guests);
      };

      guests.editGuest = function (id, guest) {
        var guests = this.getGuests();
        guests[id] = guest;
        localStorageService.set('guests', guests);
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
        return guestsObj;
      }

      return guests;
    }]);
