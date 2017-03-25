var express = require('express');
var serveStatic = require('serve-static')
var app = express();

app.set('view engine', 'ejs'); // set up ejs for templating

app.use('/js',serveStatic(__dirname + '/scripts'));
app.use('/js3',serveStatic(__dirname + '/scripts/third_party'));
app.use('/resources',serveStatic(__dirname + '/scripts/third_party/potree/resources'));
app.use('/assets',serveStatic(__dirname + '/assets'));

app.get('/', function (req, res) {
  var person = 'Raj';
  res.render('main.ejs', {
    name: person,
    age: 22
  });
});

app.get('/schedule', function (req, res) {
  res.render('schedule.ejs');
});

app.get('/viewer', function (req, res) {
  res.render('viewer.ejs');
});

app.get('/scheduler-data', function(req, res) {
  var scheduleData = {
      data:[
          {id:1, text:"Project #1", start_date:"01-04-2013", duration:18,
      progress:0.4, open: true},
          {id:2, text:"Task #1",    start_date:"02-04-2013", duration:8,
      progress:0.6, parent:1},
          {id:3, text:"Task #2",    start_date:"11-04-2013", duration:8,
      progress:0.6, parent:1}
      ],
      links:[
          { id:1, source:1, target:2, type:"1"},
          { id:2, source:2, target:3, type:"0"},
          { id:3, source:3, target:4, type:"0"},
          { id:4, source:2, target:5, type:"2"},
    ]
  };
  res.send(scheduleData);
})

app.listen(3000, function () {
  console.log('App listening on port 3000!');
})
