'use strict';

let marked = require('marked');

marked.setOptions({
  gfm: true,
  tables: true,
  highlight: null // TODO: add syntax highlighting
})

module.exports = function(markdown, callback) {
  // TODO: wrap this callback to add syntax highlighting.
  return marked(markdown);
}
