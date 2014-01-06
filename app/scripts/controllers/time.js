'use strict';

angular.module('hourApp')
  .controller('TimeCtrl', function ($scope, Time) {

//    $scope.data = [];
    window.$scope = $scope;
    window.test = Time;
    $scope.data = [
      {"timeIn": "01:01", "timeOut": "01:03", "duration": "00:05"},
      {"timeIn": "00:30", "timeOut": "01:35", "duration": "00:05"}
    ];

    $scope.$watch('data', function() {
      $scope.totalTime = getTotalTime();
    }, true);

    function addNewTime(inTime, outTime) {
      console.log(inTime,outTime);
      if (validate(inTime) && validate(outTime)) {
        $scope.data.push({ 'timeIn': inTime, 'timeOut': outTime });
        $scope.newTimeIn = null;
        $scope.newTimeOut = null;
      }
    }

    function removeTime(index) {
      $scope.data.splice(index, 1);
    }

    function reset() {
      if(window.confirm("Clear all data?")) {
        $scope.data = [];
      }
    }

    function validate(timeStr) {
      if (typeof (timeStr) !== "string") {
        return false;
      }
      if (timeStr.indexOf(':') < 1) {
        return false;
      }
      return true;
    }

    function getDuration(inTime, outTime) {
      var duration = outTime.minus(inTime);
      return duration;
    }

    function getTotalTime() {
      var data = $scope.data,
        totalTime = new Time();
      for (var i = 0, entry; entry = data[i]; i++) { //jshint ignore:line
        if (validate(entry.timeIn) && validate(entry.timeOut)) {
          var timeIn = new Time(entry.timeIn),
            timeOut = new Time(entry.timeOut),
            entryTotal = getDuration(timeIn, timeOut);
          entry.duration = entryTotal.toString();
          totalTime = totalTime.add(entryTotal);
        } else {
          entry.duration = "invalid";
        }
      }
      return totalTime.toString();
    }

    $scope.addNewTime = addNewTime;
    $scope.removeTime = removeTime;
    $scope.getDuration = getDuration;
    $scope.reset = reset;
  });
