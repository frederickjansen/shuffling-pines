'use strict';

describe('Controller: FormCtrl', function () {

  // load the controller's module
  beforeEach(module('shufflingPines'));

  var FormCtrl,
    state,
    GuestService;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller) {
    state = {
      go: function () {}
    };
    spyOn(state, 'go');

    GuestService = {
      addGuest: function () {},
      getGuests: function () {}
    };
    spyOn(GuestService, 'addGuest');
    spyOn(GuestService, 'getGuests');

    FormCtrl = $controller('FormCtrl', {
      $state: state,
      GuestService: GuestService
    });
  }));

  it('submit must add new guest, calling GuestService.addGuest', function () {
    var guest = {
      deleted: false
    };
    FormCtrl.submit(guest);
    expect(GuestService.addGuest).toHaveBeenCalledWith(guest);
  });

  it('console.log must be called with GuestService.getGuests', function () {
    console.log = jasmine.createSpy('log');
    FormCtrl.submit({});
    expect(console.log).toHaveBeenCalled();
  });

  it('state should be main.guests after adding new guest', function () {
    FormCtrl.submit({});
    expect(state.go).toHaveBeenCalledWith('main.guests');
  });

  it('date picker should be closed initially', function () {
    expect(FormCtrl.picker).toEqual({opened: false});
  });
});
