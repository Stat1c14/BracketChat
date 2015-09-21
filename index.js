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

app.get('/js/bootstrap.min.js', function(req, res){
  res.sendFile(__dirname + '/js/bootstrap.min.js');
});

io.on('connection', function(socket){
  socket.on('chat message', function(msg){
    io.emit('chat message', msg);
  });
});

http.listen(2015, function(){
  console.log('Listening on port 2015');
});