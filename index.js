var app = require('express')();
var http = require('http').Server(app);
var io = require('socket.io')(http);

app.get('/', function(req, res){
  res.sendFile(__dirname + '/index.html');
});

app.get('/welcome', function(req, res){
  res.send('<h1>Hello there! You just programmed with Node.js</h1>');
});

app.get('/about.html', function(req, res){
  res.sendFile(__dirname + '/about.html');
});

app.get('/css/style.css', function(req, res){
  res.sendFile(__dirname + '/css/style.css');
});

app.get('/css/bootstrap.css', function(req, res){
  res.sendFile(__dirname + '/css/bootstrap.css');
});

app.get('/css/solarized-light.css', function(req, res){
  res.sendFile(__dirname + '/css/solarized-light.css');
});

app.get('/js/bootstrap.min.js', function(req, res){
  res.sendFile(__dirname + '/js/bootstrap.min.js');
});

app.get('/js/rainbow.min.js', function(req, res){
  res.sendFile(__dirname + '/js/rainbow.min.js');
});

app.get('/js/shCore.js', function(req, res){
  res.sendFile(__dirname + '/js/shCore.js');
});

app.get('/js/shBrushSql.js', function(req, res){
  res.sendFile(__dirname + '/js/shBrushSql.js');
});

app.get('/css/shCoreDefault.css', function(req, res){
  res.sendFile(__dirname + '/css/shCoreDefault.css');
});

app.get('/js/language/generic.js', function(req, res){
  res.sendFile(__dirname + '/js/language/generic.js');
});

app.get('/js/language/html.js', function(req, res){
  res.sendFile(__dirname + '/js/language/html.js');
});

io.on('connection', function(socket){
  socket.on('chat message', function(msg){
    io.emit('chat message', msg);
  });
});

http.listen(2015, function(){
  console.log('Listening on port 2015');
});