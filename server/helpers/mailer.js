require('dotenv').config();
// dotenv.load();

const sgMail = require('@sendgrid/mail');

sgMail.setApiKey(process.env.SENDGRID_API_KEY);
const msg = {
  to: 'xrolediamond@gmail.com',
  from: 'meetXrole',
  subject: 'MeetXrole message recieved',
  text: 'I am a chosen one',
 };
sgMail.send(msg);




// Client secrete: JlBF7znzS2jdGws_fzwHqLBT
// client id: 348157679931-h4o5o927vrf66rrsa5ae3ugkmhm9bmf4.apps.googleusercontent.com
// sendgrid api key: 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