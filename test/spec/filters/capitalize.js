'use strict';

describe('Filter: capitalize', function () {

  // load the filter's module
  beforeEach(module('shufflingPines'));

  var capitalize;

  // Initialize the controller and a mock scope
  beforeEach(inject(function (capitalizeFilter) {
    capitalize = capitalizeFilter;
  }));

  it('the first letter should be capitalized', function () {
    expect(capitalize('foo')).toBe('Foo');
    expect(capitalize('foo bar')).toBe('Foo bar');
    expect(capitalize('')).toBe('');
  });

});
