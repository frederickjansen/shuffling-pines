angular.module('shufflingPines.filters')

  // Convert new line to <br /> tag
  .filter('nl2br', ['$filter',
    function ($filter) {
      return function (data) {
        if (!data) return data;
        return data.replace(/\n\r?/g, '<br />');
      };
    }
  ]);
