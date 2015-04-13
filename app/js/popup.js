angular.module("vocab", [])
.controller('ListController', ['$scope', function($scope) {

  var transformWordHistory;

  // google dictionary
  chrome.runtime.sendMessage('mgijmajocgfcbeboacabfgobmjgjcoja', {getHistory: true}, {}, function(words) {
    $scope.$apply(function () {
      $scope.words = transformWordHistory(words);
    });
  });

  // transform word history from google dictionary into our format
  transformWordHistory = function (words) {
    // words in an object which key is the word and value is the definition
    var vocabWords = [];
    var k, splited;
    for (k in words){
      if (words.hasOwnProperty(k)) {
        splited = k.split('<');
        if (splited.length >= 3) {
          vocabWords.push({word: splited[2], definition: words[k]});
        }
      }
    }
    return vocabWords;
  };

}]);
