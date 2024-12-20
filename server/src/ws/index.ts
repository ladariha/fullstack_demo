import WebSocket, { WebSocketServer } from "ws";

export const createWsServer = () => {
  const wss = new WebSocketServer({ noServer: true });

  wss.on("connection", (ws) => {
    ws.on("error", console.error);
    console.log("CONNECTED");
    ws.send(JSON.stringify({
      direction: "incoming",
      position: "normal",
      message: "Connected",
      id: "-1",
      sender: "system",
    }, null, 2));
    ws.on("message", (data, isBinary) => {
      console.log("message received");
      wss.clients.forEach(function each(client) {
        if (client !== ws && client.readyState === WebSocket.OPEN) {
          client.send(data, { binary: isBinary });
        }
      });
    });
  });
  return wss;
};
