module.exports = require('yargs').usage(`Usage: $0 [options] [@filename]`)
     .version()

     .string('t', 'you must provide a --to address').alias('t', 'to')
     .describe('t', 'a list of email addresses to send this to')

     .string('c').alias('c', 'cc')
     .describe('c', 'a list of email addresses to cc')

     .string('bcc')
     .describe('bcc', 'a list of email addresses to bcc')

     .string('s').alias('s', 'subject')
     .describe('s', 'The subject to use for the email')

     .help('h').alias('h', 'help')
     .argv;
