const WebSocket = require('ws');
const uuid = require('uuid');
const parse = require('querystring').parse

const wss = new WebSocket.Server({ port: 8000 });

let wsMap = new Map();

wss.on('connection', (ws, req) => {
  const user = parse(req.url.substring(2)).user;
  wsMap.set(user, ws);

  ws.on('message', e => {
    for (let [key, _ws] of wsMap) {
      _ws.send(e);
    }
  });

  ws.on('close', e => {
    wsMap.delete(user);
  });
});
