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
      get: function () {
      },
      set: function () {
      }
    };
    spyOn(localStorageService, 'get').and.callFake(function (key) {
      return objStorage[key];
    });
    spyOn(localStorageService, 'set').and.callFake(function (key, value) {
      objStorage[key] = value;
    });

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

  it('adding a guest should add one to storage', function () {
    var guest = {
      name: "FJ",
      transitionDate: new Date(2015, 12, 20),
      status: "pickup",
      location: "123 St\r\nBoston"
    };
    GuestService.addGuest(guest);
    var guestFromStorage = localStorageService.get('guests')[3];
    expect(guestFromStorage).toBe(guest);
  });

  it('deleted flag should be set to false on new guest', function () {
    var guest = {
      name: "FJ",
      transitionDate: new Date(2015, 12, 20),
      status: "pickup",
      location: "123 St\r\nBoston",
      deleted: true
    };
    GuestService.addGuest(guest);
    expect(guest.deleted).toBe(false);
  });

  it('id should be +1 of existing guest count', function () {
    var guest = {
      id: 100,
      name: "FJ",
      transitionDate: new Date(2015, 12, 20),
      status: "pickup",
      location: "123 St\r\nBoston"
    };
    GuestService.addGuest(guest);
    expect(guest.id).toBe(4);
  });

  it('removing guest should set deleted flag to true', function () {
    GuestService.removeGuest(1);
    var guests = GuestService.getGuests();
    expect(guests[0].deleted).toBe(true);
  });

  it('editing a guest should edit it in storage', function () {
    var guest = {
      id: 1,
      name: "FJ",
      transitionDate: new Date(2015, 12, 20),
      status: "pickup",
      location: "123 St\r\nBoston",
      deleted: false
    };
    GuestService.editGuest(1, guest);
    var guests = GuestService.getGuests();
    expect(guests[0].name).toBe('FJ');
  });
});
