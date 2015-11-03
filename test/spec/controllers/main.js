'use strict';

describe('Controller: MainCtrl', function () {

  // load the controller's module
  beforeEach(module('shufflingPines'));

  var MainCtrl;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller) {
    MainCtrl = $controller('MainCtrl', {});
  }));

  it('tab data should be set correctly', function () {
    var tabData = [
      {
        heading: 'Form',
        route: 'main.form'
      },
      {
        heading: 'Guests',
        route: 'main.guests'
      }
    ];
    expect(MainCtrl.tabData).toEqual(tabData);
  });
});
