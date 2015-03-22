

angular.module("vocab", [])
.controller('ListController', ['$scope', function($scope) {

  // google dictionary
  chrome.runtime.sendMessage('mgijmajocgfcbeboacabfgobmjgjcoja', {getHistory: true}, {}, function(words) {
    $scope.$apply(function () {
      $scope.words = words;
    });
  });

}]);
