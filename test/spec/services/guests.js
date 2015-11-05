'use strict';

describe('Service: GuestService', function () {

  // load the controller's module
  beforeEach(module('shufflingPines'));

  var GuestService,
    localStorageService;

  // Initialize the service and dependencies
  beforeEach(function () {
    var objStorage = {};
    localStorageService = {
      get: function (key) {
        return objStorage[key];
      },
      set: function (key, value) {
        objStorage[key] = value;
      }
    };
    spyOn(localStorageService, 'get');
    spyOn(localStorageService, 'set');

    module(function ($provide) {
      $provide.value('localStorageService', localStorageService);
    });

    inject(function (_GuestService_) {
      GuestService = _GuestService_;
    });

  });

  it('three guests should be present by default', function () {
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

    var guests = GuestService.getGuests();

    expect(guests).toEqual(guestsObj);
  });

  xit('', function () {

  });
})
;
