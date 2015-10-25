'use strict';

angular.module('shufflingPines.services')

  /*=============================================
   =                   Guests                   =
   =============================================*/
  .factory('Guests', ['localStorageService',
    function (localStorageService) {
      var guests = {};

      guests.addGuest = function () {

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
            location: "123 St\r\nBoston"
          }, {
            name: "Jane Doe",
            transitionDate: new Date(2015, 12, 21),
            status: "pickup",
            location: "321 Ave\r\nCambridge"
          }, {
            name: "Joe Johnson",
            transitionDate: new Date(2015, 12, 22),
            status: "dropoff",
            location: "1 Rd\r\nSomerville"
          }
        ];

        localStorageService.set('guests', guestsObj);
      }

      return guests;
    }]);
