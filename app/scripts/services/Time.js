'use strict';

angular.module('hourApp')
  .factory('Time', function () {
    // Service logic
    // ...

    function Time(input) {
      if ( !(this instanceof Time) ) {
        return new Time(input);
      }

      if (input === undefined || input === null) {
        this.hour = 0;
        this.minute = 0;
      }
      else if (input instanceof Time) {
        this.hour = input.hour;
        this.minute = input.minute;
      }
      else if ( typeof(input) === 'string' ) {
        var par = input.split(':');
        this.hour = parseInt(par[0], 10);
        this.minute = parseInt(par[1], 10);
      }
    }

    function zeroFill( number, length ) {
      var res = number.toString();
      while (res.length < length) {
        res = "0" + res;
      }
      return res;
    }

    Time.prototype.toString = function() {
      var st = zeroFill(this.hour, 2) + ":" + zeroFill(this.minute, 2);
      return st;
    };

    Time.prototype.minus = function(otherTime) {
      var result = new Time();
      result.hour = this.hour - otherTime.hour;
      result.minute = this.minute - otherTime.minute;
      if (result.minute < 0) {
        result.minute += 60;
        result.hour -= 1;
      }
      if (result.hour < 0) {
        result.hour += 24;
      }
      return result;
    };

    Time.prototype.add = function(otherTime) {
      var result = new Time(),
        minute = this.minute + otherTime.minute,
        hour = this.hour + otherTime.hour;
      result.minute = minute % 60;
      result.hour = hour + window.parseInt(minute/60, 10);
      return result;
    };


    return Time;
  });
