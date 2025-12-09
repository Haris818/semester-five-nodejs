const express = require('express');
const app = express();

app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.use(function (req, res,next) {
    console.log('Hello HARIS');
    next();
  });

app.get('/', function (req, res) {
  res.send('<h1>HELLO HARIS MEMON</h1>')
});
app.get('/contact', function (req, res) {
    res.send('Contact  Page')
  });


  app.use((err,req,res,next) => {
    console.error(err.stack);
    res.status(500).send('Something broke!');
  })

app.listen(3000)