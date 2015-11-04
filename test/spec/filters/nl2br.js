'use strict';

describe('Filter: nl2br', function () {

  // load the filter's module
  beforeEach(module('shufflingPines'));

  var nl2br;

  // Initialize the controller and a mock scope
  beforeEach(inject(function (nl2brFilter) {
    nl2br = nl2brFilter;
  }));

  it('return carriage characters should become br tags', function () {
    expect(nl2br('foo\nbar')).toBe('foo<br />bar');
    expect(nl2br('foo\n\rbar')).toBe('foo<br />bar');
  });

});
