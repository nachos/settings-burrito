'use strict';

angular.module('nachosSettingsApp')
  .controller('Toolbar', function ($scope, $state) {
    $scope.back = function () {
      $state.go('main.packages');
    };
  });
