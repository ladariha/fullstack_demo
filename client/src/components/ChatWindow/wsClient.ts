export type WebSocketClient = {
  close: () => void;
  send: (message: string) => void;
};

const PING_MESSAGE = JSON.stringify({
  type: "ping",
  payload: {},
});

export const getWebSocketClient = (
  url: string,
  onConnectionChange: (isConnected: boolean) => void,
  onMessage: (newMessage: string) => void
): WebSocketClient => {
  let socket: WebSocket | undefined;
  let reconnectOnClose = true;

  const createConnection = () => {
    socket = new WebSocket(url);

    let intervalId: number = -1;

    const startPing = () => {
      intervalId = window.setInterval(() => {
        socket?.send(PING_MESSAGE);
      }, 5000);
    };

    socket.onopen = () => {
      startPing();
      onConnectionChange(true);
    };
    socket.onerror = (err) => {
      console.error(err);
    };

    socket.onclose = () => {
      onConnectionChange(false);
      window.clearInterval(intervalId);
      if (reconnectOnClose) {
        createConnection();
      }
    };

    socket.onmessage = (event) => {
      onMessage(event.data);
    };
  };

  createConnection();

  const send = (message: string) => {
    socket?.send(message);
  };

  const close = () => {
    reconnectOnClose = false;
    if (socket?.readyState === 1) {
      socket.close();
    }
  };

  return { close, send };
};
