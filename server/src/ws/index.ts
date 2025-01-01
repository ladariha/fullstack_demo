import WebSocket, { WebSocketServer } from "ws";

const PING_MESSAGE = JSON.stringify({
  type: "ping",
  payload: {},
});

export const createWsServer = () => {
  const wss = new WebSocketServer({ noServer: true });

  wss.on("connection", (ws) => {
    ws.on("error", (err) => {
      try {
        console.error(err);
        ws.close();
      } catch (e) {
        console.error(e);
      }
    });

    ws.on("close", () => {
      console.log("Connection closed");
    });

    ws.send(JSON.stringify({
      type: "message",
      payload: {
        direction: "incoming",
        position: "normal",
        message: "Connected",
        id: "-1",
        sender: "system",
      }
    }, null, 2));

    ws.on("message", (data, isBinary) => {
      const message = JSON.parse(data as unknown as string);
      if (message.type === "message") {
        wss.clients.forEach((client) => {
          if (client !== ws && client.readyState === WebSocket.OPEN) {
            client.send(data, { binary: isBinary });
          }
        });
      } else if (message.type === "ping") {
        ws.send(PING_MESSAGE);
      }
    });
  });

  return wss;
};
