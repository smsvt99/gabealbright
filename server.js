const express = require('express');
const app = express();
const path = require('path');
const bodyParser = require('body-parser');
const nodemailer = require('nodemailer');
const jsonParser = bodyParser.json()

const port = 5000 || process.env.PORT;

app.use(express.static(path.join(__dirname, 'build')));

app.get('/', (req, res)=>{
    res.sendFile(path.join(__dirname, 'build', 'index.html'));
})
app.post('/sendMail', jsonParser, (req, res)=>{
    console.log(req.body)

    const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
          user: 'gabemakesthings@gmail.com',
          pass: 'bigoldtoadmagnet58'
        }
      });
      
      var mailOptions = {
        from: 'gabemakesthings@gmail.com',
        to: 'gabealbright@gmail.com',
        subject: 'New Message from Portfolio Site',
        text: `${req.body.name} sent you a new message: \n \n ${req.body.message} \n \n please reply to them at ${req.body.email}`
      };
      
      transporter.sendMail(mailOptions, function(error, info){
        if (error) {
          console.log(error);
        } else {
          console.log('Email sent: ' + info.response);
        }
      });


})

app.listen(port, () => console.log(`Listening on port ${port}!`))
