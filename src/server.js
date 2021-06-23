const express = require('express');
const nodemailer = require('nodemailer');
const app = express();
require('dotenv').config();

app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.header(
    'Access-Control-Allow-Headers',
    'Origin, X-Requested-With, Content-Type, Accept'
  );
  next();
});
app.use(express.json());

let transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    type: 'OAuth2',
    user: process.env.EMAIL,
    pass: process.env.WORD,
    clientId: process.env.OAUTH_CLIENTID,
    clientSecret: process.env.OAUTH_CLIENT_SECRET,
    refreshToken: process.env.OAUTH_REFRESH_TOKEN,
  },
});

transporter.verify((err, success) => {
  err
    ? console.log(err)
    : console.log(`=== Server is ready to take messages: ${success} ===`);
});

app.post('/send', (req, res) => {
  let mailOptions = {
    from: `${req.body.data.name} <${req.body.data.email}>`,
    to: process.env.EMAIL,
    subject: `Art message from: ${req.body.data.name} (${req.body.data.email})`,
    text: req.body.data.message,
  };

  transporter.sendMail(mailOptions, (err, data) => {
    if (err) {
      res.json({
        status: 'fail',
      });
    } else {
      console.log('== Message Sent ==');
      res.json({
        status: 'success',
      });
    }
  });
});

const port = 3001;
app.listen(port, () => {
  console.log(`Server is running on port: ${port}`);
});
