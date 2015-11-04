'use strict';

describe('Controller: GuestsCtrl', function () {

  // load the controller's module
  beforeEach(module('shufflingPines'));

  var GuestsCtrl,
    GuestService;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller) {
    GuestService = {
      addGuest: function () {
      },
      getGuests: function () {
        return {foo: 'bar'}
      },
      editGuest: function () {
      },
      removeGuest: function () {
      }
    };
    spyOn(GuestService, 'addGuest');
    spyOn(GuestService, 'getGuests');
    spyOn(GuestService, 'editGuest');
    spyOn(GuestService, 'removeGuest');

    GuestsCtrl = $controller('GuestsCtrl', {
      GuestService: GuestService
    });
  }));

  it('removeGuest should not go through when confirm is unsuccessful', function () {
    GuestsCtrl.removeGuest(1);
    expect(GuestService.removeGuest).not.toHaveBeenCalled();
  });

  it('removeGuest should go through when confirm is successful', function () {
    spyOn(window, 'confirm').and.callFake(function () {
      return true;
    });
    GuestsCtrl.removeGuest(1);
    expect(GuestService.removeGuest).toHaveBeenCalled();
    expect(GuestsCtrl.allGuests).toEqual(GuestsCtrl.getGuests());
  });

  it('editGuest should call GuestService.editGuest with new data', function () {
    GuestsCtrl.editGuest(1, 'test');
    expect(GuestService.editGuest).toHaveBeenCalledWith(1, 'test');
  });

  it('editGuest should retain deleted false flag', function () {
    var obj = {deleted: true};
    var objReal = {deleted: false, id: 1};
    GuestsCtrl.editGuest(1, obj);
    expect(GuestService.editGuest).toHaveBeenCalledWith(1, objReal);
  });

  it('getGuests should return GuestService.getGuests()', function () {
    GuestsCtrl.getGuests();
    expect(GuestService.getGuests).toHaveBeenCalled();
  });

  it('showStatus should return true if its input is the same', function () {
    expect(GuestsCtrl.showStatus('foo', 'foo')).toBe(true);
    expect(GuestsCtrl.showStatus('foo', 'bar')).toBe(false);
  });

  it('dropoffStatus should be set correctly', function () {
    var dropoffStatus = [
      {value: 'dropoff', text: 'Drop-off'},
      {value: 'arrived', text: 'Arrived'}
    ];
    expect(GuestsCtrl.dropoffStatus).toEqual(dropoffStatus);
  });

  it('pickupStatus should be set correctly', function () {
    var pickupStatus = [
      {value: 'pickup', text: 'Pick-up'},
      {value: 'arrived', text: 'Arrived'}
    ];
    expect(GuestsCtrl.pickupStatus).toEqual(pickupStatus);
  });

  it('arrivedStatus should be set correctly', function () {
    var arrivedStatus = [
      {value: 'arrived', text: 'Arrived'},
      {value: 'pickup', text: 'Pick-up'}
    ];
    expect(GuestsCtrl.arrivedStatus).toEqual(arrivedStatus);
  });

  it('guests should be pulled initially when loading controller', function () {
    expect(GuestsCtrl.allGuests).toEqual(GuestsCtrl.getGuests());
  });

  it('date picker should be closed initially', function () {
    expect(GuestsCtrl.picker).toEqual({opened: false});
  });
});
