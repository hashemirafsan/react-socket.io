import io from 'socket.io-client';

const socketHost = (host) => {
    const socket = io.connect(host);
    return socket;
}

export default socketHost;