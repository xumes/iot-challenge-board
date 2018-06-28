const express = require('express');
const app = express();
const server = require('http').createServer(app);
const io = require('socket.io')(server);
const bodyParser = require('body-parser');
const session = require('express-session');
const cookieParser = require('cookie-parser');
const path = require('path');

const port = process.env.PORT || 3000

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cookieParser());
app.use(session(require('./config/session')));

app.use((req, res, next) => {
  req.io = io;
  return next();
});

io.sockets.on('connection', (socket) => {
  socket.on('joinGame', (game) => {
    socket.join(game);
  });

  socket.on('leaveGame', (game) => {
    socket.leave(game);
  });

  socket.on('vote', (data) => {
    io.sockets.in(data.game).emit('newVote', data);
  });
});

app.use('/api', require('./src/server/routes'));

app.use('/', express.static(path.resolve(__dirname, 'dist')));

app.get('*', (req, res) => {
  return res.sendFile(path.resolve(__dirname, 'dist', 'index.html'));
});


server.listen(port);