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
    spyOn(state, 'go').and.callThrough();

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

  xit('submit must add new guest', function () {
    FormCtrl.submit({});
    expect(state.go).toHaveBeenCalledWith('main.guests');
  });

  it('state should be main.guests after adding new guest', function () {
    FormCtrl.submit({});
    expect(state.go).toHaveBeenCalledWith('main.guests');
  });

  it('date picker should be closed initially', function () {
    expect(FormCtrl.picker).toEqual({opened: false});
  });
});
