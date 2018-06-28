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
  socket.on('joinGame', (data) => {
    socket.join(data.game);
    io.sockets.in(data.game).emit('newUser', data);
  });

  socket.on('userUpdate', (data) => {
    io.sockets.in(data.game).emit('updatedUsers', data);
  });

  socket.on('leaveGame', (game) => {
    socket.leave(game);
  });

  socket.on('addIssue', (data) => {
    io.sockets.in(data.game).emit('newIssue', data.issue);
  })

  socket.on('sendIssues', (game) => {
    io.sockets.in(game).emit('sendIssuesHost');
  })

  socket.on('issueslist', (data) => {
    io.sockets.in(data.game).emit('getIssueslist', data.issues);
  })

  socket.on('sendCurrentIssue', (data) => {
    io.sockets.in(data.game).emit('getCurrentIssue', data.currentIssue);
  })

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