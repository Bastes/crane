import styles from './stylus-sources/test.styl'

var Spelling = require("./elm-sources/Spelling");
var mountNode = document.getElementById('root');
var app = Spelling.Spelling.embed(mountNode);

function spellCheck(word) {
  return ["toto", "tata", "tutu"];
};

app.ports.check.subscribe(function(word) {
  var suggestions = spellCheck(word);
  app.ports.suggestions.send(suggestions);
});
