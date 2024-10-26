const bodyParser = require('body-parser');
const jsonServer = require('json-server');
const body_parser = require("body-parser");

const server = jsonServer.create();
const router = jsonServer.router('db.json');
const middlewares = jsonServer.defaults();

const port = process.env.PORT || 8080;

server.use(middlewares);
server.use(body_parser.json());



//server.use('/api/v1', middlewares)
server.use(jsonServer.bodyParser);

server.use(function (req, res, next) {
  console.log("ola mundo");
  next();
})
//server.use('/api/v1', router)
server.use(router);

server.listen(port, () => {
  // eslint-disable-next-line no-console
  console.log(`JSON Server is running in ${port}`);
});