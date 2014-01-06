'use strict';

angular.module('hourApp')
  .controller('HourCtrl', function ($scope) {

    var saveKey = "QhourCalculator";

    var data = JSON.parse(localStorage.getItem(saveKey)) || [];

//    var data = [
//      {"hour": 3, "minute": 5},
//      {"hour": 1, "minute": 2},
//      {"hour": 4, "minute": 6},
//      {"hour": 3, "minute": 7},
//      {"hour": 3, "minute": 9}
//    ];
    function add() {
      var hour = $scope.addHour || 0,
        minute = $scope.addMinute || 0;
      if (hour || minute) {
        $scope.data.push({"hour": hour, "minute": minute});
        $scope.addHour = "";
        $scope.addMinute = "";
      }
    }

    function remove(index) {
      $scope.data.splice(index, 1);
    }

    function save() {
      localStorage.setItem(saveKey, JSON.stringify($scope.data));
      window.alert("OK");
    }

    function reset() {
      if (window.confirm("Clear all data?")) {
        $scope.data = [];
        localStorage.removeItem(saveKey);
      }
    }

    $scope.$watch("data", function(){
      var totalHour = 0, totalMinute = 0;
      for (var i = 0, entry; entry = $scope.data[i]; i++) { //jshint ignore:line
        var hour = entry.hour, minute = entry.minute;
        totalHour += hour;
        totalMinute += minute;
      }
      totalHour += window.parseInt(totalMinute / 60);
      totalMinute = totalMinute % 60;
      $scope.totalHour = totalHour;
      $scope.totalMinute = totalMinute;
    }, true);

    $scope.data = data;
    $scope.add = add;
    $scope.remove = remove;
    $scope.reset = reset;
    $scope.save = save;
    window.scope = $scope;
  });
