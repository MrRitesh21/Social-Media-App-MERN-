import io from 'socket.io-client';

const socket = io('http://localhost:3001');

export const emit = (event, data) => socket.emit(event, data);
export const on = (event, callback) => socket.on(event, callback);