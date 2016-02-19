'use strict';

let fm = require('front-matter');
let cheerio = require('cheerio');
let render = require('./render');
let mail = require('./mail');

function getSubject(html) {
  let $ = cheerio.load(html);

  // Find the first header, if any.  Return its text.
  return $('h1,h2,h3,h4,h5,h6').first().text();
}

module.exports = function(markdown, options) {
  let headers = Object.assign({}, options);

  // Check to see if the markdown file has any front-matter;
  if (fm.test(markdown)) {
    let content = fm(markdown);

    Object.assign(headers, content.attributes);
    markdown = content.body;
  }

  let html = render(markdown);
  if (!headers.subject) {
    headers.subject = getSubject(html);
  }
  mail(headers, markdown, html);
}
