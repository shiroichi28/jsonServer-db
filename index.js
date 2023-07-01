const jsonServer = require("json-server");
const server = jsonServer.create();
const route = jsonServer.router("db.json");
const middleware = jsonServer.defaults();
const port = process.env.PORT || 8080;

server.use(middleware);
server.use(route);
server.listen(port);
