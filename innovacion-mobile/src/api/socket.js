import { io } from 'socket.io-client';

const socket = io('https://TU_BACKEND_URL', {
  transports: ['websocket'],
  reconnection: true,
});

export default socket;
