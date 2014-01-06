'use strict';

describe('Service: Time', function () {

  // load the service's module
  beforeEach(module('hourApp'));

  // instantiate service
  var Time;
  beforeEach(inject(function (_Time_) {
    Time = _Time_;
  }));

  it('should do something', function () {
    expect(!!Time).toBe(true);
  });

  it('should handle timeOut < timeIn', function() {
    var timeIn = new Time('02:05'),
      timeOut = new Time('01:10'),
      result = timeOut.minus(timeIn);
    expect(result.toString()).toBe('23:05');
  });

});
