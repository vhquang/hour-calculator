'use strict';

describe('Controller: TimeCtrl', function () {

  // load the controller's module
  beforeEach(module('hourApp'));

  var TimeCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    TimeCtrl = $controller('TimeCtrl', {
      $scope: scope
    });
  }));

  
});
