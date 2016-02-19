'use strict';

let mailer = require('nodemailer');
let sendmail = require('nodemailer-sendmail-transport');

let transporter = mailer.createTransport(sendmail());

module.exports = function(headers, text, html) {
  let envelope = {
    to: headers.to,
    cc: headers.cc,
    bcc: headers.bcc,
    subject: headers.subject,
    text: text,
    html: html
  };

  transporter.sendMail(envelope, function(err, info) {
    if (err) {
      console.error("Failed to send message!");
      console.error(err);
    } else {
      console.log(`Successfully delivered email: "${envelope.subject}"!`);
    }
  })
}
