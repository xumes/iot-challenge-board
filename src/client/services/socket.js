import connect from 'socket.io-client';

const URL = process.env.NODE_ENV === 'development' ? 'http://localhost:3000' : null;
const socket = connect(URL);

export default socket;