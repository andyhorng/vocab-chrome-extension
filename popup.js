
// google dictionary
chrome.runtime.sendMessage('mgijmajocgfcbeboacabfgobmjgjcoja', {getHistory: true}, {}, function(words) {
  console.log(words);
});

