const express = require('express');
const app = express();
const path = require('path');
const bodyParser = require('body-parser');
const nodemailer = require('nodemailer');
var cookieParser = require('cookie-parser');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const jsonParser = bodyParser.json()

let config;
try{
  config = require('./config');
} catch(err) {
  config = {};
}

const uri = process.env.mongoUri || config.mongoUri;
const secret = process.env.hashSecret || config.hashSecret;

const DbHelper = require('./DbHelper')
const dbHelper = new DbHelper(uri)

const saltRounds = process.env.saltRounds || config.saltRounds;

const port = process.env.PORT || 5000;

app.use(express.static(path.join(__dirname, 'build')));
app.use(cookieParser(secret))

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
})
app.get('/portfolio', (req, res) => {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
})
app.get('/about', (req, res) => {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
})
app.get('/contact', (req, res) => {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
})
app.get('/login', (req, res) => {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
})
app.get('/admin', (req, res) => {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
})


app.post('/sendMail', jsonParser, (req, res) => {
  console.log(req.body)

  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: 'gabemakesthings@gmail.com',
      pass: process.env.emailPass || config.emailPass
    }
  });

  var mailOptions = {
    from: 'gabemakesthings@gmail.com',
    to: 'gabealbright@gmail.com',
    subject: 'New Message from Portfolio Site',
    text: `${req.body.name} sent you a new message: \n \n ${req.body.message} \n \n please reply to them at ${req.body.email}`
  };

  transporter.sendMail(mailOptions, function (error, info) {
    if (error) {
      console.log(error);
    } else {
      console.log('Email sent: ' + info.response);
    }
  });
})

app.post('/upload', jsonParser, async (req, res) => {
  if(hasValidHeader(req, res))
  {
    const result = await dbHelper.insert(req.body)
    res.send(result)
  }
  else
  {
    res.status(401).send()
  }
});

app.get('/pull', async (req, res) => {
  const media = await dbHelper.pull()
  res.send(JSON.stringify(media))
})

app.post('/newUser', jsonParser, async (req, res) => {
  const encrypted = {
    username: await bcrypt.hash(req.body.username, saltRounds),
    password: await bcrypt.hash(req.body.password, saltRounds)
  }
  dbHelper.newUser(encrypted)
  res.send("okay")
});

app.post('/login', jsonParser, async (req, res) => {
  let user = await dbHelper.getUser();
  user = user[0];

  if(await bcrypt.compare(req.body.username, user.username) 
  && await bcrypt.compare(req.body.password, user.password))
  {
    console.log('login okay')
    var token = jwt.sign({name: req.body.username}, secret);
    console.log(token)

    res
      .header('x-auth-token', token)
      .send()

  // } else {
  //   res.status(400).send()
  }
})

app.get('/getUser', async(req, res) => {
  let user = await dbHelper.getUser();
  user = user[0];
  console.log(user)
})

app.post('/update/:id', jsonParser, async(req, res)=>{
  // console.log("update called",req.params.id, req.body)
  if(hasValidHeader(req, res)){
    await dbHelper.update(req.params.id, req.body)
    res.status(200).send();
  }
})

app.get('/getOne/:id', async (req, res) => {
  const result = await dbHelper.getOne(req.params.id);
  res.json(result)
})

app.delete('/delete/:id', async (req, res) => {
  if(hasValidHeader(req, res)){
    const result = await dbHelper.delete(req.params.id)
    res.json(result)
  }
})

function hasValidHeader(req, res){
  const token = req.header('x-auth-token');
  if(!token){
    console.log('no token')
    res.status(401).send('Access denied. No token.')
    return false;
  } 
  else {
    try
    {
      const payload = jwt.verify(token, secret);
      console.log('all good')
      return true;
    } 
    catch (err) 
    {
      res.status(400).send('invalid token');
      console.log('bad token')
      return false;
    }
  }
}

app.listen(port, () => console.log(`Listening on port ${port}!`))
