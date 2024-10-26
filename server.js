const bodyParser = require('body-parser');
const jsonServer = require('json-server');
const fs = require("fs");
let dados = [];
const server = jsonServer.create();
const router = jsonServer.router('db.json');
const middlewares = jsonServer.defaults();

const port = process.env.PORT || 8080;

server.use(middlewares);

//server.use('/api/v1', middlewares)
server.use(jsonServer.bodyParser);



//server.use('/api/v1', router)
server.use(router);
server.use(function (req, res, next) {
  escreveDados();
})


server.listen(port, () => {
  // eslint-disable-next-line no-console
  console.log(`JSON Server is running in ${port}`);
});


function escreveDados(){
  let dadosJoson = fs.readFileSync("./db.json",{encoding: "utf-8"});
  let dadosrecebidos = JSON.parse(dadosJoson);
  dados = dadosrecebidos;
  console.log(dados);
 // fs.writeFileSync("./db.json",JSON.stringify(dados),{encoding: 'utf-8'});
  }