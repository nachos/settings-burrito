'use strict';

angular.module('nachosSettingsApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('main.packages', {
        url: '/packages',
        controller: 'Packages',
        templateUrl: 'app/main/packages/packages.html'
      });
  });
