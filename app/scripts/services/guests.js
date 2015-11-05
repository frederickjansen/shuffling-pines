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
        guest.id = allGuests.length + 1;
        guest.deleted = false;
        allGuests.push(guest);
        localStorageService.set('guests', allGuests);
      };

      guests.removeGuest = function (id) {
        var guests = this.getGuests();
        guests[id - 1].deleted = true;
        localStorageService.set('guests', guests);
      };

      guests.editGuest = function (id, guest) {
        var guests = this.getGuests();
        guests[id - 1] = guest;
        localStorageService.set('guests', guests);
      };

      guests.getGuests = function () {
        var guests = localStorageService.get('guests');
        if (!guests) {
          guests = generateGuests();
          localStorageService.set('guests', guests);
        }

        return guests;
      };

      function generateGuests() {
        var guestsObj = [
          {
            id: 1,
            name: "John Doe",
            transitionDate: new Date(2015, 12, 20),
            status: "dropoff",
            location: "",
            deleted: false
          }, {
            id: 2,
            name: "Jane Doe",
            transitionDate: new Date(2015, 12, 21),
            status: "pickup",
            location: "321 Ave\r\nCambridge",
            deleted: false
          }, {
            id: 3,
            name: "Joe Johnson",
            transitionDate: new Date(2015, 12, 22),
            status: "dropoff",
            location: "",
            deleted: false
          }
        ];

        localStorageService.set('guests', guestsObj);
        return guestsObj;
      }

      return guests;
    }]);
