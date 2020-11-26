"use strict";

var express = require('express');

var app = express();

var path = require('path'); // npm i handlebars consoliate --save


var engines = require('consolidate');

app.engine('hbs', engines.handlebars);
app.set('views', './views');
app.set('view engine', 'hbs');
app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname) + '/index.html');
});
app.get('/animal', function (req, res) {
  res.sendFile(path.join(__dirname) + '/animal.html');
});
app.get('/product', function (req, res) {
  res.sendFile(path.join(__dirname) + '/product.html');
}); // cho phep doc du lieu tu text box

var bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({
  extended: false
}));

var fs = require('fs');

var fileName = 'data.txt';
app.get('/viewAll', function (req, res) {
  // res.write('<html>');
  // res.write('<body>')
  // res.write('<ul>')
  // data = fs.readFileSync(fileName, 'utf-8');
  // res.write('</ul>')
  // var animals = data.split(';');
  // animals.shift(); // remove the first element
  // animals.forEach(element => {
  //     res.write('<li>' + element + '</li>')
  // });
  // res.write('</ul>')
  // res.write('</body>')
  // res.write('</html>');
  data = fs.readFileSync(fileName, 'utf-8');
  var animals = data.split(';');
  animals.shift();
  res.render('animals', {
    model: animals
  });
});
app.post('/addAnimal', function (req, res) {
  var name = req.body.animalName;
  fs.appendFileSync(fileName, ';' + name); // go to home page

  res.redirect('/');
});
app.post('/addProduct', function (req, res) {
  var name1 = req.body.animalProduct;
  var name2 = req.body.animalPrice;
  fs.appendFileSync(fileName, ';' + 'Name product is:' + name1 + '\n Price is:' + name2);
  res.redirect('/');
});
var PORT = process.env.PORT || 3000;
app.listen(PORT);
console.debug('Server is running on port: ' + PORT);