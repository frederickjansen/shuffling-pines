'use strict';

angular.module('shufflingPines.filters')
  // Capitalize first letter of string
  .filter('capitalize', function () {
    return function (data) {
      if (!data) {
        return data;
      }
      return data.charAt(0).toUpperCase() + data.slice(1);
    };
  }
);
