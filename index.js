var app = require('express')();
var http = require('http').Server(app);
var io = require('socket.io')(http);

app.get('/', function(req, res){
  res.sendFile(__dirname + '/index.html');
});

app.get('/welcome', function(req, res){
  res.send('<h1>Hello there! You just programmed with Node.js</h1>');
});

app.get('/style/style.css', function(req, res){
  res.sendFile(__dirname + '/style/style.css');
});

io.on('connection', function(socket){
  socket.on('chat message', function(msg){
    io.emit('chat message', msg);
  });
});

http.listen(2015, function(){
  console.log('Listening on port 2015');
});