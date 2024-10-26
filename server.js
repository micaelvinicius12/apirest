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

server.use(function (req, res, next) {
   console.log(req.headers); 
 // escreveDados();
  next();
})

//server.use('/api/v1', router)
server.use(router);

server.listen(port, () => {
  // eslint-disable-next-line no-console
  console.log(`JSON Server is running in ${port}`);
});


function escreveDados(){
  let dadosJoson = fs.readFileSync("./db.json",{encoding: "utf-8"});
  let dadosrecebidos = JSON.parse(dadosJoson);
  dados = dadosrecebidos;
  const novoDado = [];
 // novoDado["dados"] = []; 
  for(let el of dados["dados"]){
    if(el["id"] == 2){
      console.log(novoDado);
      fs.writeFileSync("./db.json",JSON.stringify(novoDado),{encoding: 'utf-8'});
    }
  }
 
  }